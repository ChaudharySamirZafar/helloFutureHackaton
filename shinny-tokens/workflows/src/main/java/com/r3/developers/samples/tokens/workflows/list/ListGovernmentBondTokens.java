package com.r3.developers.samples.tokens.workflows.list;


import com.r3.developers.samples.tokens.states.GovernmentBondState;
import net.corda.v5.application.flows.ClientRequestBody;
import net.corda.v5.application.flows.ClientStartableFlow;
import net.corda.v5.application.flows.CordaInject;
import net.corda.v5.application.marshalling.JsonMarshallingService;
import net.corda.v5.base.annotations.Suspendable;
import net.corda.v5.ledger.utxo.StateAndRef;
import net.corda.v5.ledger.utxo.UtxoLedgerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

// This flow is used to list all the gold tokens available in the vault.
public class ListGovernmentBondTokens implements ClientStartableFlow {

    private final static Logger log = LoggerFactory.getLogger(ListGovernmentBondTokens.class);

    @CordaInject
    public JsonMarshallingService jsonMarshallingService;

    // Injects the UtxoLedgerService to enable the flow to make use of the Ledger API.
    @CordaInject
    public UtxoLedgerService utxoLedgerService;

    @Suspendable
    @Override
    public String call(ClientRequestBody requestBody) {
        List<StateAndRef<GovernmentBondState>> states = utxoLedgerService.findUnconsumedStatesByExactType(GovernmentBondState.class,100, Instant.now()).getResults();

        List<GovernmentBondStateList> results = states.stream().map(stateAndRef ->
                new GovernmentBondStateList(
                        stateAndRef.getState().getContractState().getIssuer(),
                        stateAndRef.getState().getContractState().getOwner(),
                        stateAndRef.getState().getContractState().getSymbol(),
                        stateAndRef.getState().getContractState().getAmount(),
                        stateAndRef.getState().getContractState().getIssuerCommonName(),
                        stateAndRef.getState().getContractState().getOwnerCommonName(),
                        stateAndRef.getState().getContractState().getBondId(),
                        stateAndRef.getState().getContractState().getMaturityDate(),
                        stateAndRef.getState().getContractState().getCouponRate(),
                        stateAndRef.getState().getContractState().getCurrency()
                )
        ).collect(Collectors.toList());

        return jsonMarshallingService.format(results);
    }
}

/*
RequestBody for triggering the flow via http-rpc:
{
    "clientRequestId": "list-1",
    "flowClassName": "com.r3.developers.samples.tokens.workflows.list.ListGoldTokens",
    "requestBody": {}
}
*/
package com.r3.developers.samples.tokens.workflows.issue;

import com.r3.developers.samples.tokens.contracts.GovernmentBondContract;
import com.r3.developers.samples.tokens.states.GovernmentBondState;
import net.corda.v5.application.crypto.DigestService;
import net.corda.v5.application.flows.*;
import net.corda.v5.application.marshalling.JsonMarshallingService;
import net.corda.v5.application.membership.MemberLookup;
import net.corda.v5.base.annotations.Suspendable;
import net.corda.v5.base.exceptions.CordaRuntimeException;
import net.corda.v5.base.types.MemberX500Name;
import net.corda.v5.crypto.SecureHash;
import net.corda.v5.ledger.common.NotaryLookup;
import net.corda.v5.ledger.utxo.UtxoLedgerService;
import net.corda.v5.ledger.utxo.transaction.UtxoSignedTransaction;
import net.corda.v5.ledger.utxo.transaction.UtxoTransactionBuilder;
import net.corda.v5.membership.MemberInfo;
import net.corda.v5.membership.NotaryInfo;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.Instant;
import java.util.Collections;

import static java.util.Objects.requireNonNull;
import static net.corda.v5.crypto.DigestAlgorithmName.SHA2_256;

// Alice will trigger this flow to issue gold tokens to Bob.
public class IssueGovernmentBondTokensFlow implements ClientStartableFlow {
    private final static Logger log = LoggerFactory.getLogger(IssueGovernmentBondTokensFlow.class);
    @CordaInject
    public JsonMarshallingService jsonMarshallingService;
    @CordaInject
    public MemberLookup memberLookup;
    @CordaInject
    public UtxoLedgerService ledgerService;
    @CordaInject
    public NotaryLookup notaryLookup;
    @CordaInject
    public FlowEngine flowEngine;
    @CordaInject
    public DigestService digestService;

    @NotNull
    @Suspendable
    @Override
    public String call(ClientRequestBody requestBody) {

        try {
            IssueGovernmentBondTokenFlowArgs mintGoldInputRequest =
                    requestBody.getRequestBodyAs(jsonMarshallingService, IssueGovernmentBondTokenFlowArgs.class);

            log.info("mintGoldInputRequest: {}", mintGoldInputRequest.toString());

            MemberInfo myInfo = memberLookup.myInfo();
            MemberInfo owner = requireNonNull(
                    memberLookup.lookup(MemberX500Name.parse(mintGoldInputRequest.getOwner())),
                    "MemberLookup can't find owner specified in flow arguments."
            );

            if (!myInfo.getName().getCommonName().equals("British Government")) {
                throw new CordaRuntimeException("Only the government can Issue a token...");
            }

            NotaryInfo notary = notaryLookup.getNotaryServices().iterator().next();

            GovernmentBondState governmentBondState = new GovernmentBondState(
                    getSecureHash(myInfo.getName().getCommonName()),
                    getSecureHash(owner.getName().getCommonName()),
                    mintGoldInputRequest.getSymbol(),
                    new BigDecimal(mintGoldInputRequest.getAmount()),
                    Collections.singletonList(owner.getLedgerKeys().get(0)),
                    myInfo.getName().getCommonName(),
                    owner.getName().getCommonName(),
                    mintGoldInputRequest.getBondId(),
                    mintGoldInputRequest.getMaturityDate(),
                    mintGoldInputRequest.getCouponRate(),
                    mintGoldInputRequest.getCurrency());

            UtxoTransactionBuilder txBuilder = ledgerService.createTransactionBuilder()
                    .setNotary(notary.getName())
                    .setTimeWindowBetween(Instant.now(), Instant.now().plusMillis(Duration.ofDays(1).toMillis()))
                    .addOutputState(governmentBondState)
                    .addCommand(new GovernmentBondContract.Issue())
                    .addSignatories(myInfo.getLedgerKeys().get(0));

            UtxoSignedTransaction signedTransaction = txBuilder.toSignedTransaction();


            return flowEngine.subFlow(new FinalizeGovernmentBondTokenSubFlow(signedTransaction, owner.getName()));
        }
        catch (Exception e) {
            log.warn("Failed to process utxo flow for request body " + requestBody + " because: " + e.getMessage());
            throw new CordaRuntimeException(e.getMessage());
        }
    }

    @Suspendable
    private SecureHash getSecureHash(String commonName) {
        return digestService.hash(commonName.getBytes(), SHA2_256);
    }
}

/*
RequestBody for triggering the flow via REST:
{
    "clientRequestId": "mint-1",
    "flowClassName": "com.r3.developers.samples.tokens.workflows.IssueGoldTokensFlow",
    "requestBody": {
        "symbol": "GOLD",
        "owner": "CN=Bob, OU=Test Dept, O=R3, L=London, C=GB",
        "amount": "20"
    }
}
 */

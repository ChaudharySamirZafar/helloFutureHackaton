package com.r3.developers.samples.tokens.states;

import com.r3.developers.samples.tokens.contracts.GovernmentBondContract;
import net.corda.v5.application.crypto.DigestService;
import net.corda.v5.ledger.utxo.observer.UtxoLedgerTokenStateObserver;
import net.corda.v5.ledger.utxo.observer.UtxoToken;
import net.corda.v5.ledger.utxo.observer.UtxoTokenFilterFields;
import net.corda.v5.ledger.utxo.observer.UtxoTokenPoolKey;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*§
By implementing the UtxoLedgerTokenStateObserver, this observer will generate fungible states/tokens for
each produced gold state when persisting a finalized transaction to the vault.
 */
public class GovernmentBondStateObserver implements UtxoLedgerTokenStateObserver<GovernmentBondState> {

    private final static Logger log = LoggerFactory.getLogger(GovernmentBondContract.class);

    @Override
    public Class<GovernmentBondState> getStateType() {
        return GovernmentBondState.class;
    }

    @NotNull
    @Override
    public UtxoToken onCommit(@NotNull GovernmentBondState state, @NotNull DigestService digestService) {
        //generate a pool with key - type, issuer and symbol to mint the tokens
        log.info("Issuing Government Bond On Ledger...............");
        UtxoTokenPoolKey poolKey = new UtxoTokenPoolKey(GovernmentBondState.class.getName(), state.getIssuer(), state.getSymbol());
        return new UtxoToken(poolKey, state.getAmount(), new UtxoTokenFilterFields(null, state.getOwner()));
    }
}

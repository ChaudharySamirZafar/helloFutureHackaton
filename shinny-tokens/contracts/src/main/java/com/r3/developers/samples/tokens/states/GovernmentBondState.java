package com.r3.developers.samples.tokens.states;

import com.r3.developers.samples.tokens.contracts.GovernmentBondContract;
import net.corda.v5.crypto.SecureHash;
import net.corda.v5.ledger.utxo.BelongsToContract;
import net.corda.v5.ledger.utxo.ContractState;
import org.jetbrains.annotations.NotNull;

import java.math.BigDecimal;
import java.security.PublicKey;
import java.util.List;

@BelongsToContract(GovernmentBondContract.class)
public class GovernmentBondState implements ContractState {

    private SecureHash issuer;
    private SecureHash owner;
    private String symbol;
    private BigDecimal amount;
    public List<PublicKey> participants;
    private String issuerCommonName;
    private String ownerCommonName;
    private String bondId;
    private String maturityDate;
    private double couponRate;
    private String currency;

    public GovernmentBondState(SecureHash issuer,
                               SecureHash owner,
                               String symbol,
                               BigDecimal amount,
                               List<PublicKey> participants,
                               String issuerCommonName,
                               String ownerCommonName,
                               String bondId,
                               String maturityDate,
                               double couponRate,
                               String currency) {
        this.issuer = issuer;
        this.owner = owner;
        this.symbol = symbol;
        this.amount = amount;
        this.participants = participants;
        this.issuerCommonName = issuerCommonName;
        this.ownerCommonName = ownerCommonName;
        this.bondId = bondId;
        this.maturityDate = maturityDate;
        this.couponRate = couponRate;
        this.currency = currency;
    }

    public SecureHash getIssuer() {
        return issuer;
    }

    public String getSymbol() {
        return symbol;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public SecureHash getOwner() {
        return owner;
    }

    public String getIssuerCommonName(){
        return issuerCommonName;
    }

    public String getOwnerCommonName(){
        return ownerCommonName;
    }

    public String getBondId(){
        return this.bondId;
    }

    public String getMaturityDate(){
        return maturityDate;
    }

    public String getCurrency(){
        return this.currency;
    }

    public double getCouponRate(){
        return this.couponRate;
    }

    @NotNull
    @Override
    public List<PublicKey> getParticipants() {
        return participants;
    }

}

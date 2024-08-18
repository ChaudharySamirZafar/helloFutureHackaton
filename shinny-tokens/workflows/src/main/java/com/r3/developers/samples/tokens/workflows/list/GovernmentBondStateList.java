package com.r3.developers.samples.tokens.workflows.list;

import net.corda.v5.crypto.SecureHash;

import java.math.BigDecimal;
import java.security.PublicKey;
import java.util.List;

public class GovernmentBondStateList {

    private SecureHash issuer;
    private String symbol;
    private BigDecimal value;
    private SecureHash owner;
    private String issuerCommonName;
    private String ownerCommonName;
    private String bondId;
    private String maturityDate;
    private double couponRate;
    private String currency;

    public GovernmentBondStateList(SecureHash issuer,
                               SecureHash owner,
                               String symbol,
                               BigDecimal value,
                               String issuerCommonName,
                               String ownerCommonName,
                               String bondId,
                               String maturityDate,
                               double couponRate,
                               String currency) {
        this.issuer = issuer;
        this.owner = owner;
        this.symbol = symbol;
        this.value = value;
        this.issuerCommonName = issuerCommonName;
        this.ownerCommonName = ownerCommonName;
        this.bondId = bondId;
        this.maturityDate = maturityDate;
        this.couponRate = couponRate;
        this.currency = currency;
    }

    public GovernmentBondStateList() {
    }

    public SecureHash getIssuer() {
        return issuer;
    }

    public String getSymbol() {
        return symbol;
    }

    public BigDecimal getValue() {
        return value;
    }

    public SecureHash getOwner() {
        return owner;
    }

    public String getIssuerCommonName() { return issuerCommonName; }

    public String getOwnerCommonName() { return ownerCommonName; }

    public String getBondId() { return bondId; }

    public String getMaturityDate() { return maturityDate; }

    public double getCouponRate() { return couponRate; }

    public String getCurrency() { return currency; }
}

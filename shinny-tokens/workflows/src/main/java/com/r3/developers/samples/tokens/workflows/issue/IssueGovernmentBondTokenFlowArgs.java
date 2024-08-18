package com.r3.developers.samples.tokens.workflows.issue;

// A class to hold the deserialized arguments required to start the flow.
public class IssueGovernmentBondTokenFlowArgs {

    // Serialisation service requires a default constructor
    public IssueGovernmentBondTokenFlowArgs() {}

    private String symbol;
    private String amount;
    private String owner;
    private String bondId;
    private String maturityDate;
    private double couponRate;
    private String currency;

    public IssueGovernmentBondTokenFlowArgs(String symbol,
                                            String amount,
                                            String owner,
                                            String bondId,
                                            String maturityDate,
                                            double couponRate,
                                            String currency) {
        this.symbol = symbol;
        this.amount = amount;
        this.owner = owner;
        this.bondId = bondId;
        this.maturityDate = maturityDate;
        this.couponRate = couponRate;
        this.currency = currency;
    }

    public String getSymbol() {
        return symbol;
    }

    public String getAmount() {
        return amount;
    }

    public String getOwner() {
        return owner;
    }

    public String getBondId() { return bondId; }

    public String getMaturityDate() { return maturityDate; }

    public double getCouponRate() { return couponRate; }

    public String getCurrency() { return currency; }

    @Override
    public String toString() {
        return "IssueGovernmentBondTokenFlowArgs [symbol=" + symbol + ", amount=" + amount + ", owner=" + owner + ", bondId=" + bondId + ", maturityDate=" + maturityDate + ", couponRate=" + couponRate + ", currency=" + currency + "]";
    }
}
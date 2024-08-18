package com.r3.developers.samples.tokens.workflows.burn;

public class BurnGovernmentBondTokenFLowArgs {

    public BurnGovernmentBondTokenFLowArgs() {
    }

    private String symbol;
    private String amount;

    public BurnGovernmentBondTokenFLowArgs(String symbol, String issuer, String amount) {
        this.symbol = symbol;
        this.amount = amount;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }
}

package sz.shinytokencustom.flow.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FlowRequestBody extends FlowRequest {

    private String symbol;
    private BigDecimal amount;
    private String owner;
    private String bondId;
    private String maturityDate;
    private double couponRate;
    private String currency;

    @Override
    public String toString() {
        return "IssueGovernmentBondTokenFlowArgs [symbol=" + symbol + ", amount=" + amount + ", owner=" + owner + ", bondId=" + bondId + ", maturityDate=" + maturityDate + ", couponRate=" + couponRate + ", currency=" + currency + "]";
    }
}
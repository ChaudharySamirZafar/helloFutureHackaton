package sz.shinytokencustom.flow.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GovernmentBondToken {

    @Id
    private String bondId;
    private String symbol;
    @Column(name = "amount")
    private BigDecimal value;
    private String owner;
    private String issuer;
    private String issuerCommonName;
    private String ownerCommonName;
    private String maturityDate;
    private double couponRate;
    private String currency;
}


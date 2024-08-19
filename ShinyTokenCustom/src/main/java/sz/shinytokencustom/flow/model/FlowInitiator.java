package sz.shinytokencustom.flow.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FlowInitiator {
    private String clientRequestId;
    private String flowClassName;
    private FlowRequestBody requestBody;
}

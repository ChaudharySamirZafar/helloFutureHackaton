package sz.shinytokencustom.flow;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sz.shinytokencustom.flow.burn.BurnService;
import sz.shinytokencustom.flow.issue.IssueService;
import sz.shinytokencustom.flow.list.ListService;
import sz.shinytokencustom.flow.model.FlowInitiator;

@Service
@RequiredArgsConstructor
@Slf4j
public class FlowService {

    private final IssueService issueService;
    private final ListService listService;
    private final BurnService burnService;

    public ResponseEntity<?> startFlow(String issuerShortHash, FlowInitiator flowInitiator) {
        if (flowInitiator.getFlowClassName().equals("IssueGovernmentBondTokensFlow")) {
            log.info("Issuing a new government bond token");
            return issueService.issueToken(issuerShortHash, flowInitiator);
        } else if (flowInitiator.getFlowClassName().equals("ListGovernmentBondTokens")) {
            log.info("Listing tokens");
            return listService.listToken(issuerShortHash, flowInitiator);
        } else if (flowInitiator.getFlowClassName().equals("BurnGovernmentBondTokenFlow")) {
            log.info("burning token");
            return burnService.burnToken(issuerShortHash, flowInitiator);
        }
        else {
            return ResponseEntity.badRequest().build();
        }
    }
}

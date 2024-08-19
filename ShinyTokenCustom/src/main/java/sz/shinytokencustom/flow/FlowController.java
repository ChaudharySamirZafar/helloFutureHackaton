package sz.shinytokencustom.flow;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sz.shinytokencustom.flow.model.FlowInitiator;

@RestController
@RequestMapping("/api/v1/flow/")
@CrossOrigin
public class FlowController {

    private final FlowService flowService;

    @Autowired
    public FlowController(FlowService flowService) {
        this.flowService = flowService;
    }

    @PostMapping("{issuerShortHash}")
    public ResponseEntity<?> startFlow(@PathVariable String issuerShortHash, @RequestBody FlowInitiator flowInitiator){
        return flowService.startFlow(issuerShortHash, flowInitiator);
    }
}

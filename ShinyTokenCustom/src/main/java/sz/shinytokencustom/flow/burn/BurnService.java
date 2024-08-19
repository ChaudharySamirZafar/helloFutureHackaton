package sz.shinytokencustom.flow.burn;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sz.shinytokencustom.flow.FlowRepository;
import sz.shinytokencustom.flow.model.FlowInitiator;
import sz.shinytokencustom.flow.model.GovernmentBondToken;
import sz.shinytokencustom.virtualNode.IVirtualNodeRepository;


@Service
@RequiredArgsConstructor
public class BurnService {
    private final IVirtualNodeRepository virtualNodeRepository;
    private final FlowRepository flowRepository;

    public ResponseEntity<Void> burnToken(String issuerShortHash, FlowInitiator flowInitiator) {
        // Find by the symbol...
        GovernmentBondToken governmentBondToken = flowRepository.findBySymbol(flowInitiator.getRequestBody().getSymbol()).orElse(null);

        flowRepository.delete(governmentBondToken);
        
        return ResponseEntity.ok().build();
    }
}

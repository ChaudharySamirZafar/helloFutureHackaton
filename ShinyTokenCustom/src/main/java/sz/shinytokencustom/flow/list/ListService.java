package sz.shinytokencustom.flow.list;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sz.shinytokencustom.flow.FlowRepository;
import sz.shinytokencustom.flow.model.FlowInitiator;
import sz.shinytokencustom.flow.model.GovernmentBondToken;
import sz.shinytokencustom.virtualNode.Entity.X500Entity;
import sz.shinytokencustom.virtualNode.IVirtualNodeRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ListService {
    private final IVirtualNodeRepository virtualNodeRepository;
    private final FlowRepository flowRepository;

    public ResponseEntity<List<GovernmentBondToken>> listToken(String issuerShortHash, FlowInitiator flowInitiator) {
        // Check if the owner is legit now.. which should be Samir, in my cases.
        // Throw error if not.
        X500Entity owner = virtualNodeRepository.findByShortHash(issuerShortHash).orElse(null);

        List<GovernmentBondToken> governmentBondTokenList = flowRepository.findAllByOwner(owner.getShortHash());

        log.info("Found governmentBondTokenList: {}", governmentBondTokenList);

        return ResponseEntity.ok(governmentBondTokenList);
    }
}

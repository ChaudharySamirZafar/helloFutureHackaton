package sz.shinytokencustom.flow.issue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sz.shinytokencustom.flow.FlowRepository;
import sz.shinytokencustom.flow.model.FlowRequestBody;
import sz.shinytokencustom.flow.model.FlowInitiator;
import sz.shinytokencustom.flow.model.GovernmentBondToken;
import sz.shinytokencustom.virtualNode.Entity.X500Entity;
import sz.shinytokencustom.virtualNode.IVirtualNodeRepository;

@Service
public class IssueService {
    private final IVirtualNodeRepository virtualNodeRepository;
    private final FlowRepository flowRepository;

    @Autowired
    public IssueService(IVirtualNodeRepository virtualNodeRepository, FlowRepository flowRepository) {
        this.virtualNodeRepository = virtualNodeRepository;
        this.flowRepository = flowRepository;
    }

    public ResponseEntity<Void> issueToken(String issuerShortHash, FlowInitiator flowInitiator) {
        // Check the issuer is legit.. which should be the government.
        // Throw error if not
        X500Entity issuer = virtualNodeRepository.findByShortHash(issuerShortHash).orElse(null);

        FlowRequestBody flowRequestBody = flowInitiator.getRequestBody();

        // Check if the owner is legit now.. which should be Samir, in my cases.
        // Throw error if not.
        X500Entity owner = virtualNodeRepository.findById(flowRequestBody.getOwner()).orElse(null);

        // Create new bond...
        GovernmentBondToken governmentBondToken =
                GovernmentBondToken.builder()
                        .issuer(issuer.getShortHash())
                        .symbol(flowRequestBody.getSymbol())
                        .value(flowRequestBody.getAmount())
                        .owner(owner.getShortHash())
                        .issuerCommonName(issuer.getCommonName())
                        .ownerCommonName(owner.getCommonName())
                        .bondId(flowRequestBody.getBondId())
                        .maturityDate(flowRequestBody.getMaturityDate())
                        .couponRate(flowRequestBody.getCouponRate())
                        .currency(flowRequestBody.getCurrency())
                        .build();

        flowRepository.save(governmentBondToken);

        return ResponseEntity.ok().build();
    }
}

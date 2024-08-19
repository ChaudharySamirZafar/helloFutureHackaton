package sz.shinytokencustom.virtualNode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sz.shinytokencustom.virtualNode.Entity.X500Entity;

import java.util.List;

@Service
public class VirtualNodeService {

    private final IVirtualNodeRepository virtualNodeRepository;

    @Autowired
    public VirtualNodeService(IVirtualNodeRepository virtualNodeRepository) {
        this.virtualNodeRepository = virtualNodeRepository;
    }

    public List<X500Entity> getAllVirtualNodes() {

        return virtualNodeRepository.findAll();
    }
}

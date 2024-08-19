package sz.shinytokencustom.virtualNode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sz.shinytokencustom.virtualNode.Entity.X500Entity;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin
public class VirtualNodeController {

    private final VirtualNodeService virtualNodeService;

    @Autowired
    public VirtualNodeController(VirtualNodeService virtualNodeService) {
        this.virtualNodeService = virtualNodeService;
    }

    @GetMapping("/virtualNode")
    public ResponseEntity<List<X500Entity>> getAllVirtualNodes() {
        List<X500Entity> listOfVirtualNodes = virtualNodeService.getAllVirtualNodes();

        return ResponseEntity.ok(listOfVirtualNodes);
    }
}

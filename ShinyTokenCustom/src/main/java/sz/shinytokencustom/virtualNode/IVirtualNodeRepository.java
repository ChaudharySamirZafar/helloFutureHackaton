package sz.shinytokencustom.virtualNode;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sz.shinytokencustom.virtualNode.Entity.X500Entity;

import java.util.Optional;

@Repository
public interface IVirtualNodeRepository extends JpaRepository<X500Entity, String> {
    Optional<X500Entity> findByShortHash(String shortHash);
}

package sz.shinytokencustom.flow;

import org.springframework.data.jpa.repository.JpaRepository;
import sz.shinytokencustom.flow.model.GovernmentBondToken;

import java.util.List;
import java.util.Optional;

public interface FlowRepository extends JpaRepository<GovernmentBondToken, String> {
    List<GovernmentBondToken> findAllByOwner(String owner);
    Optional<GovernmentBondToken> findBySymbol(String symbol);
}

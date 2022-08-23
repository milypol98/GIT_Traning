package pl.milypol.qr_shirt.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import pl.milypol.qr_shirt.entity.TShirt;

public interface TShirtRepository extends JpaRepository<TShirt,Long> {
}

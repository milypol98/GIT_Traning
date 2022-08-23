package pl.milypol.qr_shirt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.milypol.qr_shirt.entity.Delivery;

public interface DeliveryRepository extends JpaRepository<Delivery,Long> {

}

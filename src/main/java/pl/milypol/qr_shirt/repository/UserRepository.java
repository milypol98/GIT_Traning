package pl.milypol.qr_shirt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.milypol.qr_shirt.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUsername(String username);
}

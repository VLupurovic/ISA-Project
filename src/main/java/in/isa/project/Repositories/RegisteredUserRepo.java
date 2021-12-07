package in.isa.project.Repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.RegisteredUser;

@Repository
public interface RegisteredUserRepo extends JpaRepository<RegisteredUser, Long>{
    RegisteredUser findByEmail(String email);

    @Transactional
    @Modifying
    @Query ("UPDATE RegisteredUser r " + "SET r.enabled = TRUE WHERE r.email = ?1")
    int enableRegisteredUser(String email);

    RegisteredUser findRegisteredUserById(Long id);
}

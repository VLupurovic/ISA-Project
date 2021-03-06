package in.isa.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.UserDeleteRequest;

@Repository
public interface UserDeleteRequestRepo extends JpaRepository<UserDeleteRequest, Long>{
    
}

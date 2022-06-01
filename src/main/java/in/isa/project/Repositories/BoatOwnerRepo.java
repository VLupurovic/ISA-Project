package in.isa.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.BoatOwner;

@Repository
public interface BoatOwnerRepo extends JpaRepository<BoatOwner, Long>{
    
}
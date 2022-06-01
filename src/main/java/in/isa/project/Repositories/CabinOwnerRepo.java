package in.isa.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.CabinOwner;

@Repository
public interface CabinOwnerRepo extends JpaRepository<CabinOwner, Long>{
    
}

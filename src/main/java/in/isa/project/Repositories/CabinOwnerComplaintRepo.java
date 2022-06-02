package in.isa.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.Complaints.CabinOwnerComplaint;

@Repository
public interface CabinOwnerComplaintRepo extends JpaRepository<CabinOwnerComplaint, Long>{
    
}

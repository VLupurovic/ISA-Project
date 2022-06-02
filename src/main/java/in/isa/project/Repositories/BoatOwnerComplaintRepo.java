package in.isa.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.Complaints.BoatOwnerComplaint;

@Repository
public interface BoatOwnerComplaintRepo extends JpaRepository<BoatOwnerComplaint, Long>{
    
}

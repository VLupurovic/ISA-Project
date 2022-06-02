package in.isa.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.Complaints.InstructorComplaint;

@Repository
public interface InstructorComplaintRepo extends JpaRepository<InstructorComplaint, Long>{
    
}

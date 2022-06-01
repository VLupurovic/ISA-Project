package in.isa.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.Reviews.InstructorReview;

@Repository
public interface InstructorReviewRepo extends JpaRepository<InstructorReview, Long>{
    
}

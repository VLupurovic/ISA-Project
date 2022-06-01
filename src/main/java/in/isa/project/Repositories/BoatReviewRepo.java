package in.isa.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.Reviews.BoatReview;

@Repository
public interface BoatReviewRepo extends JpaRepository<BoatReview, Long>{
    
}

package in.isa.project.Repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.Reviews.CabinReview;

@Repository
public interface CabinReviewRepo extends JpaRepository<CabinReview, Long>{
    
}

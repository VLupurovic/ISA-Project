package in.isa.project.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.AdventureReview;

@Repository
public interface AdventureReviewRepo extends JpaRepository<AdventureReview, Long>{
    
}

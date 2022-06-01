package in.isa.project.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.Cabin;
import in.isa.project.Entities.CabinOwner;
import in.isa.project.Entities.Reviews.CabinOwnerReview;
import in.isa.project.Entities.Reviews.CabinReview;
import in.isa.project.Exceptions.CabinNotFoundException;
import in.isa.project.Repositories.CabinOwnerRepo;
import in.isa.project.Repositories.CabinOwnerReviewRepo;
import in.isa.project.Repositories.CabinRepo;
import in.isa.project.Repositories.CabinReviewRepo;

@Service
public class CabinService {
    @Autowired
    private CabinRepo cabinRepo;
    @Autowired
    private CabinReviewRepo cabinReviewRepo;
    @Autowired
    private CabinOwnerRepo cabinOwnerRepo;
    @Autowired
    private CabinOwnerReviewRepo cabinOwnerReviewRepo;


    public Cabin addCabin(Cabin cabin){
        return cabinRepo.save(cabin);
    }

    public ArrayList<Cabin> findAllCabins(){
        return cabinRepo.findAll();
    }

    public Cabin findCabinById(Long id){
        return cabinRepo.findById(id)
            .orElseThrow(() -> new CabinNotFoundException("Cabin with id " + id + " was not found."));
    }

    public Cabin updateCabin(Long id, Cabin cabin){
        Cabin toUpdate = cabinRepo.findCabinById(id);
        toUpdate.Update(cabin);
        return cabinRepo.save(toUpdate);
    }

    public void deleteCabin(Long id){
        Cabin toDelete = cabinRepo.findCabinById(id);
        cabinRepo.delete(toDelete);
    }



    public CabinReview createCabinReview(CabinReview review){
        if(review.getRating() > 10 || review.getRating() < 1){
            throw new IllegalStateException("Rating not withing 1 - 10 range.");
        }
        
        CabinReview newReview = new CabinReview();
        newReview.Update(review);

        Cabin cabin = cabinRepo.getById(review.getCabinId());
        cabin.setAverageRating((cabin.getAverageRating() + review.getRating()) / (cabinReviewRepo.count() + 1));
        cabinRepo.save(cabin);

        return cabinReviewRepo.save(newReview);
    }

    public CabinOwnerReview createCabinOwnerReview(CabinOwnerReview review){
        if(review.getRating() > 10 || review.getRating() < 1){
            throw new IllegalStateException("Rating not withing 1 - 10 range.");
        }
        
        CabinOwnerReview newReview = new CabinOwnerReview();
        newReview.Update(review);

        CabinOwner cabinOwner = cabinOwnerRepo.getById(review.getCabinOwnerId());
        cabinOwner.setAverageRating((cabinOwner.getAverageRating() + review.getRating()) / (cabinOwnerReviewRepo.count() + 1));
        cabinOwnerRepo.save(cabinOwner);

        return cabinOwnerReviewRepo.save(newReview);
    }


    public CabinOwner getOwnerById(Long id){
        return cabinOwnerRepo.findById(id).get();
    }
}

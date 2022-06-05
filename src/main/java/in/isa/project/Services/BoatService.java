package in.isa.project.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import in.isa.project.Entities.Boat;
import in.isa.project.Entities.BoatOwner;
import in.isa.project.Entities.RegisteredUser;
import in.isa.project.Entities.Complaints.BoatComplaint;
import in.isa.project.Entities.Complaints.BoatOwnerComplaint;
import in.isa.project.Entities.Reviews.BoatOwnerReview;
import in.isa.project.Entities.Reviews.BoatReview;
import in.isa.project.Exceptions.CabinNotFoundException;
import in.isa.project.Repositories.BoatComplaintRepo;
import in.isa.project.Repositories.BoatOwnerComplaintRepo;
import in.isa.project.Repositories.BoatOwnerRepo;
import in.isa.project.Repositories.BoatOwnerReviewRepo;
import in.isa.project.Repositories.BoatRepo;
import in.isa.project.Repositories.BoatReviewRepo;
import in.isa.project.Repositories.RegisteredUserRepo;

@Service
public class BoatService {
    @Autowired
    private BoatRepo boatRepo;
    @Autowired
    private BoatReviewRepo boatReviewRepo;
    @Autowired
    private BoatOwnerRepo boatOwnerRepo;
    @Autowired
    BoatOwnerReviewRepo boatOwnerReviewRepo;
    @Autowired
    BoatComplaintRepo boatComplaintRepo;
    @Autowired
    BoatOwnerComplaintRepo boatOwnerComplaintRepo;
    @Autowired
    RegisteredUserRepo registeredUserRepo;

    public ArrayList<Boat> findAllBoats(){
        return boatRepo.findAll();
    }

    public Boat findBoatById(Long id) {
        return boatRepo.findById(id)
            .orElseThrow(() -> new CabinNotFoundException("Cabin with id " + id + " was not found."));
    }


    public BoatReview createBoatReview(BoatReview review){
        if(review.getRating() > 10 || review.getRating() < 1){
            throw new IllegalStateException("Rating not withing 1 - 10 range.");
        }
        
        BoatReview newReview = new BoatReview();
        newReview.Update(review);

        Boat boat = boatRepo.getById(review.getBoatId());
        boat.setAverageRating((boat.getAverageRating() + review.getRating()) / (boatReviewRepo.count() + 1));
        boatRepo.save(boat);

        return boatReviewRepo.save(newReview);
    }

    public BoatOwnerReview createBoatOwnerReview(BoatOwnerReview review){
        if(review.getRating() > 10 || review.getRating() < 1){
            throw new IllegalStateException("Rating not withing 1 - 10 range.");
        }
        
        BoatOwnerReview newReview = new BoatOwnerReview();
        newReview.Update(review);

        BoatOwner boatOwner = boatOwnerRepo.getById(review.getBoatOwnerId());
        boatOwner.setAverageRating((boatOwner.getAverageRating() + review.getRating()) / (boatOwnerReviewRepo.count() + 1));
        boatOwnerRepo.save(boatOwner);

        return boatOwnerReviewRepo.save(newReview);
    }

    public BoatOwner getOwnerById(Long id){
        return boatOwnerRepo.findById(id).get();
    }

    public BoatComplaint createBoatComplaint(BoatComplaint complaint){
        return boatComplaintRepo.save(complaint);
    }

    public BoatOwnerComplaint createBoatOwnerComplaint(BoatOwnerComplaint complaint){
        return boatOwnerComplaintRepo.save(complaint);
    }

    public ArrayList<Boat> getUserBoatSubscriptions(Long id){
        RegisteredUser user = registeredUserRepo.getById(id);
        ArrayList<Long> subs = user.getBoatSubscriptions();

        if(subs == null){
            subs = new ArrayList<Long>();
        }

        ArrayList<Boat> boats = boatRepo.findAll();
        ArrayList<Boat> toReturn = boatRepo.findAll();
        for(Boat boat: boats){
            if(!subs.contains(boat.getId())){
                toReturn.remove(boat);
            }
        }
        return toReturn;
    }
}

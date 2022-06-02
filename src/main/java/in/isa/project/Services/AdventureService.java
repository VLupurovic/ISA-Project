package in.isa.project.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.Adventure;
import in.isa.project.Entities.AdventureTerm;
import in.isa.project.Entities.FishingInstructor;
import in.isa.project.Entities.Complaints.AdventureComplaint;
import in.isa.project.Entities.Complaints.InstructorComplaint;
import in.isa.project.Entities.Reviews.AdventureReview;
import in.isa.project.Entities.Reviews.InstructorReview;
import in.isa.project.Repositories.AdventureComplaintRepo;
import in.isa.project.Repositories.AdventureRepo;
import in.isa.project.Repositories.AdventureReviewRepo;
import in.isa.project.Repositories.AdventureTermRepo;
import in.isa.project.Repositories.InstructorComplaintRepo;
import in.isa.project.Repositories.InstructorRepo;
import in.isa.project.Repositories.InstructorReviewRepo;

@Service
public class AdventureService {
    @Autowired
    private AdventureRepo adventureRepo;
    @Autowired
    private AdventureTermRepo adventureTermRepo;
    @Autowired
    private AdventureReviewRepo adventureReviewRepo;
    @Autowired
    private InstructorRepo instructorRepo;
    @Autowired
    private InstructorReviewRepo instructorReviewRepo;
    @Autowired
    private AdventureComplaintRepo adventureComplaintRepo;
    @Autowired
    private InstructorComplaintRepo instructorComplaintRepo;

    public ArrayList<Adventure> getAllAdventures(){
        return adventureRepo.findAll();
    }

    public ArrayList<Adventure> getInstructorAdventures(Long id) {
        return adventureRepo.findAdventuresByInstructorId(id);
    }

    public Adventure findAdventureById(Long id){
        return adventureRepo.findAdventureById(id);
    }

    public Adventure getAdventureFromTerm(Long id){
        AdventureTerm term = adventureTermRepo.findAdventureTermById(id);
        return adventureRepo.findAdventureById(term.getAdventureId());
    }

    

    public AdventureReview createAdventureReview(AdventureReview review){
        if(review.getRating() > 10 || review.getRating() < 1){
            throw new IllegalStateException("Rating not withing 1 - 10 range.");
        }
        
        AdventureReview newReview = new AdventureReview();
        newReview.Update(review);

        Adventure adventure = adventureRepo.getById(review.getAdventureId());
        adventure.setAverageRating((adventure.getAverageRating() + review.getRating()) / (adventureReviewRepo.count() + 1));
        adventureRepo.save(adventure);

        return adventureReviewRepo.save(newReview);
    }

    public InstructorReview createInstructorReview(InstructorReview review){
        if(review.getRating() > 10 || review.getRating() < 1){
            throw new IllegalStateException("Rating not withing 1 - 10 range.");
        }
        
        InstructorReview newReview = new InstructorReview();
        newReview.Update(review);

        FishingInstructor instructor = instructorRepo.getById(review.getFishingInstructorId());
        instructor.setAverageRating((instructor.getAverageRating() + review.getRating()) / (instructorReviewRepo.count() + 1));
        instructorRepo.save(instructor);

        return instructorReviewRepo.save(newReview);
    }

    public FishingInstructor getInstructorById(Long id){
        return instructorRepo.findById(id).get();
    }

    public AdventureComplaint createAdventureComplaint(AdventureComplaint complaint){
        return adventureComplaintRepo.save(complaint);
    }

    public InstructorComplaint createInstructorComplaint(InstructorComplaint complaint){
        return instructorComplaintRepo.save(complaint);
    }
}

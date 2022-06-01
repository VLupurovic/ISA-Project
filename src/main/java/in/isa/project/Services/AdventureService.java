package in.isa.project.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.Adventure;
import in.isa.project.Entities.AdventureReview;
import in.isa.project.Entities.AdventureTerm;
import in.isa.project.Repositories.AdventureRepo;
import in.isa.project.Repositories.AdventureReviewRepo;
import in.isa.project.Repositories.AdventureTermRepo;

@Service
public class AdventureService {
    @Autowired
    private AdventureRepo adventureRepo;
    @Autowired
    private AdventureTermRepo adventureTermRepo;
    @Autowired
    private AdventureReviewRepo adventureReviewRepo;

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
}

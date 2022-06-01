package in.isa.project.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.AdventureTerm;
import in.isa.project.Entities.BoatTerm;
import in.isa.project.Entities.CabinTerm;
import in.isa.project.Repositories.AdventureTermRepo;
import in.isa.project.Repositories.BoatTermRepo;
import in.isa.project.Repositories.CabinTermRepo;

@Service
public class TermService {
    @Autowired
    private AdventureTermRepo adventureTermRepo;
    @Autowired
    private BoatTermRepo boatTermRepo;
    @Autowired
    private CabinTermRepo cabinTermRepo;


    public ArrayList<AdventureTerm> getAllAdventureTerms(){
        ArrayList<AdventureTerm> terms = adventureTermRepo.findAll();
        ArrayList<AdventureTerm> toRemove = new ArrayList<AdventureTerm>();
        for(AdventureTerm term: terms){
            if(term.isPromo() == true)
                toRemove.add(term);
        }
        terms.removeAll(toRemove);
        return terms;
    }

    public ArrayList<BoatTerm> getAllBoatTerms(){
        ArrayList<BoatTerm> terms = boatTermRepo.findAll();
        ArrayList<BoatTerm> toRemove = new ArrayList<BoatTerm>();
        for(BoatTerm term: terms){
            if(term.isPromo() == true)
                toRemove.add(term);
        }
        terms.removeAll(toRemove);
        return terms;
    }

    public ArrayList<CabinTerm> getAllCabinTerms(){
        ArrayList<CabinTerm> terms = cabinTermRepo.findAll();
        ArrayList<CabinTerm> toRemove = new ArrayList<CabinTerm>();
        for(CabinTerm term: terms){
            if(term.isPromo() == true)
                toRemove.add(term);
        }
        terms.removeAll(toRemove);
        return terms;
    }

    public AdventureTerm findAdventureTermById(Long id){
        return adventureTermRepo.findAdventureTermById(id);
    }

    public BoatTerm findBoatTermById(Long id){
        return boatTermRepo.findBoatTermById(id);
    }

    public CabinTerm findCabinTermById(Long id){
        return cabinTermRepo.findCabinTermById(id);
    }

    public AdventureTerm updateAdventureTerm(Long id, AdventureTerm adventureTerm){
        AdventureTerm toUpdate = adventureTermRepo.findAdventureTermById(id);
        toUpdate = adventureTerm;
        return adventureTermRepo.save(toUpdate);
    }

    public void deleteAdventureTerm(Long id){
        AdventureTerm toDelete = adventureTermRepo.findAdventureTermById(id);
        adventureTermRepo.delete(toDelete);
    }

    public AdventureTerm addAdventureTerm(AdventureTerm newTerm){
        return adventureTermRepo.save(newTerm);
    }

    public BoatTerm updateBoatTerm(Long id, BoatTerm boatTerm){
        BoatTerm toUpdate = boatTermRepo.findBoatTermById(id);
        toUpdate = boatTerm;
        return boatTermRepo.save(toUpdate);
    }

    public void deleteBoatTerm(Long id){
        BoatTerm toDelete = boatTermRepo.findBoatTermById(id);
        boatTermRepo.delete(toDelete);
    }

    public BoatTerm addBoatTerm(BoatTerm newTerm){
        return boatTermRepo.save(newTerm);
    }

    public CabinTerm updateCabinTerm(Long id, CabinTerm cabinTerm){
        CabinTerm toUpdate = cabinTermRepo.findCabinTermById(id);
        toUpdate = cabinTerm;
        return cabinTermRepo.save(toUpdate);
    }

    public void deleteCabinTerm(Long id){
        CabinTerm toDelete = cabinTermRepo.findCabinTermById(id);
        cabinTermRepo.delete(toDelete);
    }

    public CabinTerm addCabinTerm(CabinTerm newTerm){
        return cabinTermRepo.save(newTerm);
    }

    

    //Promotions

    public ArrayList<AdventureTerm> getAllAdventurePromos(){
        ArrayList<AdventureTerm> terms = adventureTermRepo.findAll();
        ArrayList<AdventureTerm> toRemove = new ArrayList<AdventureTerm>();
        for(AdventureTerm term: terms){
            if(term.isPromo() == false)
                toRemove.add(term);
        }
        terms.removeAll(toRemove);
        return terms;
    }

    public ArrayList<BoatTerm> getAllBoatPromos(){
        ArrayList<BoatTerm> terms = boatTermRepo.findAll();
        ArrayList<BoatTerm> toRemove = new ArrayList<BoatTerm>();
        for(BoatTerm term: terms){
            if(term.isPromo() == false)
                toRemove.add(term);
        }
        terms.removeAll(toRemove);
        return terms;
    }

    public ArrayList<CabinTerm> getAllCabinPromos(){
        ArrayList<CabinTerm> terms = cabinTermRepo.findAll();
        ArrayList<CabinTerm> toRemove = new ArrayList<CabinTerm>();
        for(CabinTerm term: terms){
            if(term.isPromo() == false)
                toRemove.add(term);
        }
        terms.removeAll(toRemove);
        return terms;
    }
}

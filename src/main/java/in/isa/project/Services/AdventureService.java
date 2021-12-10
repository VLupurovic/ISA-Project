package in.isa.project.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.Adventure;
import in.isa.project.Repositories.AdventureRepo;

@Service
public class AdventureService {
    @Autowired
    private AdventureRepo adventureRepo;

    public ArrayList<Adventure> getAllAdventures(){
        return adventureRepo.findAll();
    }

    public ArrayList<Adventure> getInstructorAdventures(Long id) {
        return adventureRepo.findAdventuresByInstructorId(id);
    }

    public Adventure findAdventureById(Long id){
        return adventureRepo.findAdventureById(id);
    }
}

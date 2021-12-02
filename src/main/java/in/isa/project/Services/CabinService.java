package in.isa.project.Services;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.Cabin;
import in.isa.project.Exceptions.CabinNotFoundException;
import in.isa.project.Repositories.CabinRepo;

@Service
public class CabinService {
    @Autowired
    private CabinRepo cabinRepo;


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
}

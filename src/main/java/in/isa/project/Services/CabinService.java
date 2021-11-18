package in.isa.project.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.Cabin;
import in.isa.project.Exceptions.CabinNotFoundException;
import in.isa.project.Repositories.CabinRepo;

@Service
public class CabinService {
    private final CabinRepo cabinRepo;

    @Autowired
    public CabinService(CabinRepo cabinRepo){
        this.cabinRepo = cabinRepo;
    }

    public Cabin addCabin(Cabin cabin){
        return cabinRepo.save(cabin);
    }

    public List<Cabin> findAllCabins(){
        return cabinRepo.findAll();
    }

    public Cabin findCabinById(Long id){
        return cabinRepo.findById(id)
            .orElseThrow(() -> new CabinNotFoundException("Cabin with id " + id + " was not found."));
    }

    public Cabin updateCabin(Cabin cabin){
        return cabinRepo.save(cabin);
    }

    public void deleteCabin(Long id){
        cabinRepo.deleteCabinById(id);
    }
}

package in.isa.project.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.Boat;
import in.isa.project.Exceptions.CabinNotFoundException;
import in.isa.project.Repositories.BoatRepo;

@Service
public class BoatService {
    @Autowired
    private BoatRepo boatRepo;

    public ArrayList<Boat> findAllBoats(){
        return boatRepo.findAll();
    }

    public Boat findBoatById(Long id) {
        return boatRepo.findById(id)
            .orElseThrow(() -> new CabinNotFoundException("Cabin with id " + id + " was not found."));
    }
}

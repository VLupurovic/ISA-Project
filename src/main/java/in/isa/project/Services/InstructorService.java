package in.isa.project.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.FishingInstructor;
import in.isa.project.Exceptions.CabinNotFoundException;
import in.isa.project.Repositories.InstructorRepo;

@Service
public class InstructorService {
    @Autowired
    private InstructorRepo instructorRepo;

    public ArrayList<FishingInstructor> findAllInstructors(){
        return instructorRepo.findAll();
    }

    public FishingInstructor findInstructorById(Long id) {
        return instructorRepo.findById(id)
            .orElseThrow(() -> new CabinNotFoundException("Instructor with id " + id + " was not found."));
    }


}

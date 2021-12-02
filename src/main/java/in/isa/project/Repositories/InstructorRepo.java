package in.isa.project.Repositories;
import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import in.isa.project.Entities.Adventure;
import in.isa.project.Entities.FishingInstructor;

public interface InstructorRepo extends JpaRepository<FishingInstructor, Long>{
    public ArrayList<FishingInstructor> findAll();
}

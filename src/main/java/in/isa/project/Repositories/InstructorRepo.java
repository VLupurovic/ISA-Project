package in.isa.project.Repositories;
import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.FishingInstructor;

@Repository
public interface InstructorRepo extends JpaRepository<FishingInstructor, Long>{
    public ArrayList<FishingInstructor> findAll();
}

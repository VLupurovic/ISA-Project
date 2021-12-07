package in.isa.project.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.Adventure;

@Repository
public interface AdventureRepo extends JpaRepository<Adventure, Long>{
    public ArrayList<Adventure> findAll();

    public ArrayList<Adventure> findAdventuresByInstructorId(Long id);
}

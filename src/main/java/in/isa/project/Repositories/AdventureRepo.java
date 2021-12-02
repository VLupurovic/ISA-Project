package in.isa.project.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import in.isa.project.Entities.Adventure;

public interface AdventureRepo extends JpaRepository<Adventure, Long>{
    public ArrayList<Adventure> findAll();

    public ArrayList<Adventure> findAdventuresByInstructorId(Long id);
}

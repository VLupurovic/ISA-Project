package in.isa.project.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.AdventureTerm;

@Repository
public interface AdventureTermRepo extends JpaRepository<AdventureTerm, Long>{
    public ArrayList<AdventureTerm> findAll();
    AdventureTerm findAdventureTermById(Long id);
}

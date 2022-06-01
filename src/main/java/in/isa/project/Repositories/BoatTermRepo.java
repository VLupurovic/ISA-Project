package in.isa.project.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.BoatTerm;

@Repository
public interface BoatTermRepo extends JpaRepository<BoatTerm, Long>{
    public ArrayList<BoatTerm> findAll();
    BoatTerm findBoatTermById(Long id);
}

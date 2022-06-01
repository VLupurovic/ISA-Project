package in.isa.project.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.CabinTerm;

@Repository
public interface CabinTermRepo extends JpaRepository<CabinTerm, Long>{
    public ArrayList<CabinTerm> findAll();
    CabinTerm findCabinTermById(Long id);
}

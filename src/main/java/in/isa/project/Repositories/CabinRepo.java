package in.isa.project.Repositories;

import java.util.ArrayList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.Cabin;

@Repository
public interface CabinRepo extends JpaRepository<Cabin, Long>{
      void deleteCabinById(Long id);
      Cabin findCabinById(Long id);
      public ArrayList<Cabin> findAll();
}

package in.isa.project.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import in.isa.project.Entities.Cabin;

public interface CabinRepo extends JpaRepository<Cabin, Long>{
      void deleteCabinById(Long id);
      Optional<Cabin> findCabinById(Long id);
}

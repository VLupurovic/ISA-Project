package in.isa.project.Repositories;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.AdventureReservation;

@Repository
public interface AdventureReservationRepo extends JpaRepository<AdventureReservation, Long>{
    public ArrayList<AdventureReservation> findAll();
    public ArrayList<AdventureReservation> findAllByRegisteredUserId(Long id);
    public Optional<AdventureReservation> findById(Long id);
}

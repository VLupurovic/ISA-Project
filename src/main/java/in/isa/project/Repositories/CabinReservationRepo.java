package in.isa.project.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.CabinReservation;

@Repository
public interface CabinReservationRepo extends JpaRepository<CabinReservation, Long>{
    public ArrayList<CabinReservation> findAll();
    public ArrayList<CabinReservation> findAllByRegisteredUserId(Long id);
}

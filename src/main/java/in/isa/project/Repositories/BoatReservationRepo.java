package in.isa.project.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.BoatReservation;

@Repository
public interface BoatReservationRepo extends JpaRepository<BoatReservation, Long>{
    public ArrayList<BoatReservation> findAll();
    public ArrayList<BoatReservation> findAllByRegisteredUserId(Long id);
}

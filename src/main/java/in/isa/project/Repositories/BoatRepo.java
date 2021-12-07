package in.isa.project.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.isa.project.Entities.Boat;

@Repository
public interface BoatRepo extends JpaRepository<Boat, Long>{
    public ArrayList<Boat> findAll();
}

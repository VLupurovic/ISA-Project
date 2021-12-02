package in.isa.project.Repositories;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import in.isa.project.Entities.Boat;

public interface BoatRepo extends JpaRepository<Boat, Long>{
    public ArrayList<Boat> findAll();
}

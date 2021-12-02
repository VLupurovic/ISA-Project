package in.isa.project.Controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.isa.project.Entities.Boat;
import in.isa.project.Services.BoatService;

@CrossOrigin("*")
@RestController
@RequestMapping("api/boats")
public class BoatController {
    @Autowired
    private BoatService boatService;

    @GetMapping
    public ResponseEntity<ArrayList<Boat>> getAllBoats(){
        return new ResponseEntity<ArrayList<Boat>>(boatService.findAllBoats(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Boat> getBoatById (@PathVariable("id") Long id){
        Boat boat = boatService.findBoatById(id);
        return new ResponseEntity<Boat>(boat, HttpStatus.OK);
    }
}

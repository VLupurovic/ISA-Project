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

import in.isa.project.Entities.Adventure;
import in.isa.project.Services.AdventureService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/adventures")
public class AdventureController {
    @Autowired
    private AdventureService adventureService;

    @GetMapping
    public ResponseEntity<ArrayList<Adventure>>getAllAdventures(){
        return new ResponseEntity<ArrayList<Adventure>>(adventureService.getAllAdventures(), HttpStatus.OK);
    }

    @GetMapping("/{instructor_id}/adventures")
    public ResponseEntity<ArrayList<Adventure>> getInstructorAdventures(@PathVariable("instructor_id") Long id){
        return new ResponseEntity<ArrayList<Adventure>>(adventureService.getInstructorAdventures(id), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Adventure> getAdventureById (@PathVariable("id") Long id){
        Adventure adventure = adventureService.findAdventureById(id);
        return new ResponseEntity<Adventure>(adventure, HttpStatus.OK);
    }
}

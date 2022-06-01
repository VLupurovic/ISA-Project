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

import in.isa.project.Entities.AdventureTerm;
import in.isa.project.Entities.BoatTerm;
import in.isa.project.Entities.CabinTerm;
import in.isa.project.Services.TermService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/terms")
public class TermController {
    @Autowired
    private TermService termService;

    @GetMapping("/adventures")
    public ResponseEntity<ArrayList<AdventureTerm>> getAllAdventureTerms(){
        return new ResponseEntity<ArrayList<AdventureTerm>>(termService.getAllAdventureTerms(), HttpStatus.OK);
    }

    @GetMapping("/boats")
    public ResponseEntity<ArrayList<BoatTerm>> getAllBoatTerms(){
        return new ResponseEntity<ArrayList<BoatTerm>>(termService.getAllBoatTerms(), HttpStatus.OK);
    }

    @GetMapping("/cabins")
    public ResponseEntity<ArrayList<CabinTerm>> getAllCabinTerms(){
        return new ResponseEntity<ArrayList<CabinTerm>>(termService.getAllCabinTerms(), HttpStatus.OK);
    }

    @GetMapping("/adventures/{id}")
    public ResponseEntity<AdventureTerm> getAdventureTermById (@PathVariable("id") Long id){
        AdventureTerm adventureTerm = termService.findAdventureTermById(id);
        return new ResponseEntity<AdventureTerm>(adventureTerm, HttpStatus.OK);
    }

    @GetMapping("/boats/{id}")
    public ResponseEntity<BoatTerm> getBoatTermById (@PathVariable("id") Long id){
        BoatTerm boatTerm = termService.findBoatTermById(id);
        return new ResponseEntity<BoatTerm>(boatTerm, HttpStatus.OK);
    }

    @GetMapping("/cabins/{id}")
    public ResponseEntity<CabinTerm> getCabinTermById (@PathVariable("id") Long id){
        CabinTerm cabinTerm = termService.findCabinTermById(id);
        return new ResponseEntity<CabinTerm>(cabinTerm, HttpStatus.OK);
    }


    //Promotions
    @GetMapping("promotions/adventures")
    public ResponseEntity<ArrayList<AdventureTerm>> getAllAdventurePromos(){
        return new ResponseEntity<ArrayList<AdventureTerm>>(termService.getAllAdventurePromos(), HttpStatus.OK);
    }

    @GetMapping("promotions/boats")
    public ResponseEntity<ArrayList<BoatTerm>> getAllBoatPromos(){
        return new ResponseEntity<ArrayList<BoatTerm>>(termService.getAllBoatPromos(), HttpStatus.OK);
    }

    @GetMapping("promotions/cabins")
    public ResponseEntity<ArrayList<CabinTerm>> getAllCabinPromos(){
        return new ResponseEntity<ArrayList<CabinTerm>>(termService.getAllCabinPromos(), HttpStatus.OK);
    }
}

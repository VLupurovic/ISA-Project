package in.isa.project.Controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.isa.project.Entities.AdventureReservation;
import in.isa.project.Entities.BoatReservation;
import in.isa.project.Entities.CabinReservation;
import in.isa.project.Services.ReservationService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping("/adventures")
    public ResponseEntity<ArrayList<AdventureReservation>> getAllAdventureReservations(){
        return new ResponseEntity<ArrayList<AdventureReservation>>(reservationService.getAllAdventureReservations(), HttpStatus.OK);
    }

    @GetMapping("/boats")
    public ResponseEntity<ArrayList<BoatReservation>> getAllBoatReservations(){
        return new ResponseEntity<ArrayList<BoatReservation>>(reservationService.getAllBoatReservations(), HttpStatus.OK);
    }

    @GetMapping("/cabins")
    public ResponseEntity<ArrayList<CabinReservation>> getAllCabinReservations(){
        return new ResponseEntity<ArrayList<CabinReservation>>(reservationService.getAllCabinReservations(), HttpStatus.OK);
    }



    @GetMapping("/adventures/{id}")
    public ResponseEntity<ArrayList<AdventureReservation>> getUserAdventureReservations(@PathVariable("id") Long id){
        return new ResponseEntity<ArrayList<AdventureReservation>>(reservationService.getUserAdventureReservations(id), HttpStatus.OK);
    }

    @GetMapping("/boats/{id}")
    public ResponseEntity<ArrayList<BoatReservation>> getUserBoatReservations(@PathVariable("id") Long id){
        return new ResponseEntity<ArrayList<BoatReservation>>(reservationService.getUserBoatReservations(id), HttpStatus.OK);
    }

    @GetMapping("/cabins/{id}")
    public ResponseEntity<ArrayList<CabinReservation>> getUserCabinReservations(@PathVariable("id") Long id){
        return new ResponseEntity<ArrayList<CabinReservation>>(reservationService.getUserCabinReservations(id), HttpStatus.OK);
    }



    @GetMapping("/history/adventures/{id}")
    public ResponseEntity<ArrayList<AdventureReservation>> getUserPastAdventureReservations(@PathVariable("id") Long id){
        return new ResponseEntity<ArrayList<AdventureReservation>>(reservationService.getUserPastAdventureReservations(id), HttpStatus.OK);
    }

    @GetMapping("/history/boats/{id}")
    public ResponseEntity<ArrayList<BoatReservation>> getUserPastBoatReservations(@PathVariable("id") Long id){
        return new ResponseEntity<ArrayList<BoatReservation>>(reservationService.getUserPastBoatReservations(id), HttpStatus.OK);
    }

    @GetMapping("/history/cabins/{id}")
    public ResponseEntity<ArrayList<CabinReservation>> getUserPastCabinReservations(@PathVariable("id") Long id){
        return new ResponseEntity<ArrayList<CabinReservation>>(reservationService.getUserPastCabinReservations(id), HttpStatus.OK);
    }



    @PostMapping("/adventures")
    public ResponseEntity<AdventureReservation> createAdventureReservation(@RequestBody AdventureReservation reservation){
        return new ResponseEntity<AdventureReservation>(reservationService.createAdventureReservation(reservation), HttpStatus.OK);
    }

    @PostMapping("/boats")
    public ResponseEntity<BoatReservation> createBoatReservation(@RequestBody BoatReservation reservation){
        return new ResponseEntity<BoatReservation>(reservationService.createBoatReservation(reservation), HttpStatus.OK);
    }

    @PostMapping("/cabins")
    public ResponseEntity<CabinReservation> createCabinReservation(@RequestBody CabinReservation reservation){
        return new ResponseEntity<CabinReservation>(reservationService.createCabinReservation(reservation), HttpStatus.OK);
    }



    @DeleteMapping("/adventures/{id}")
    public void deleteAdventureReservation(@PathVariable("id") Long id){
        reservationService.deleteAdventureReservation(id);   
    }

    @DeleteMapping("/boats/{id}")
    public void deleteBoatReservation(@PathVariable("id") Long id){
        reservationService.deleteBoatReservation(id);   
    }

    @DeleteMapping("/cabins/{id}")
    public void deleteCabinReservation(@PathVariable("id") Long id){
        reservationService.deleteCabinReservation(id);   
    }



    @GetMapping("/adventure/{id}")
    public ResponseEntity<AdventureReservation> getAdventureReservationById(@PathVariable("id") Long id){
        return new ResponseEntity<AdventureReservation>(reservationService.findAdventureReservationById(id), HttpStatus.OK);
    }

    @GetMapping("/boat/{id}")
    public ResponseEntity<BoatReservation> getBoatReservationById(@PathVariable("id") Long id){
        return new ResponseEntity<BoatReservation>(reservationService.findBoatReservationById(id), HttpStatus.OK);
    }

    @GetMapping("/cabin/{id}")
    public ResponseEntity<CabinReservation> getCabinReservationById(@PathVariable("id") Long id){
        return new ResponseEntity<CabinReservation>(reservationService.findCabinReservationById(id), HttpStatus.OK);
    }
}

package in.isa.project.Controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.isa.project.Entities.Boat;
import in.isa.project.Entities.BoatOwner;
import in.isa.project.Entities.Reviews.BoatOwnerReview;
import in.isa.project.Entities.Reviews.BoatReview;
import in.isa.project.Services.BoatService;

@CrossOrigin(origins = "*")
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



    @PostMapping("/rate")
    public ResponseEntity<BoatReview> createBoatReview(@RequestBody BoatReview review){
        return new ResponseEntity<BoatReview>(boatService.createBoatReview(review), HttpStatus.OK);
    }

    @PostMapping("/rate/owner")
    public ResponseEntity<BoatOwnerReview> createBoatOwnerReview(@RequestBody BoatOwnerReview review){
        return new ResponseEntity<BoatOwnerReview>(boatService.createBoatOwnerReview(review), HttpStatus.OK);
    }


    @GetMapping("/owner/{id}")
    public ResponseEntity<BoatOwner> getOwnerById(@PathVariable("id") Long id){
        return new ResponseEntity<BoatOwner>(boatService.getOwnerById(id), HttpStatus.OK);
    }
}

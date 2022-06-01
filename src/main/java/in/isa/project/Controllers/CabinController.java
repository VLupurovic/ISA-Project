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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import in.isa.project.Entities.Cabin;
import in.isa.project.Services.CabinService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/cabins")
public class CabinController {
    @Autowired
    private CabinService cabinService;

    @GetMapping
    public ResponseEntity<ArrayList<Cabin>> getAllCabins(){
        return new ResponseEntity<ArrayList<Cabin>>(cabinService.findAllCabins(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cabin> getCabinById (@PathVariable("id") Long id){
        Cabin cabin = cabinService.findCabinById(id);
        return new ResponseEntity<Cabin>(cabin, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Cabin> addCabin(@RequestBody Cabin cabin){
        Cabin newCabin = cabinService.addCabin(cabin);
        return new ResponseEntity<Cabin>(newCabin, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cabin> updateCabin(@PathVariable("id") Long id, @RequestBody Cabin cabin){
        return new ResponseEntity<Cabin>(cabinService.updateCabin(id, cabin), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCabin(@PathVariable("id") Long id){
        cabinService.deleteCabin(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id){
        cabinService.deleteCabin(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

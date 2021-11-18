package in.isa.project.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.isa.project.Entities.Cabin;
import in.isa.project.Services.CabinService;

@RestController
@RequestMapping("/cabin")
public class CabinController {
    private final CabinService cabinService;

    @Autowired
    public CabinController(CabinService cabinService){
        this.cabinService = cabinService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Cabin>> getAllCabins(){
        List<Cabin> cabins = cabinService.findAllCabins();
        return new ResponseEntity<>(cabins, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Cabin> getCabinById (@PathVariable("id") Long id){
        Cabin cabin = cabinService.findCabinById(id);
        return new ResponseEntity<>(cabin, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Cabin> addCabin(@RequestBody Cabin cabin){
        Cabin newCabin = cabinService.addCabin(cabin);
        return new ResponseEntity<>(newCabin, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Cabin> updateCabin(@RequestBody Cabin cabin){
        Cabin updateCabin = cabinService.updateCabin(cabin);
        return new ResponseEntity<>(updateCabin, HttpStatus.OK);
    }

    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id){
        cabinService.deleteCabin(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

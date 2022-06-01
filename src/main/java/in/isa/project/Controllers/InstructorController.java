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

import in.isa.project.Entities.FishingInstructor;
import in.isa.project.Services.InstructorService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/instructors")
public class InstructorController {
    @Autowired
    private InstructorService instructorService;

    @GetMapping
    public ResponseEntity<ArrayList<FishingInstructor>> getAllInstructors(){
        return new ResponseEntity<ArrayList<FishingInstructor>>(instructorService.findAllInstructors(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FishingInstructor> getInstructorById (@PathVariable("id") Long id){
        FishingInstructor instructor = instructorService.findInstructorById(id);
        return new ResponseEntity<FishingInstructor>(instructor, HttpStatus.OK);
    }

}

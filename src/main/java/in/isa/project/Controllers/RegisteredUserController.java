package in.isa.project.Controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import in.isa.project.Entities.LoginRequest;
import in.isa.project.Entities.RegisteredUser;
import in.isa.project.Entities.RegistrationRequest;
import in.isa.project.Entities.UserDeleteRequest;
import in.isa.project.Services.RegisteredUserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class RegisteredUserController {
    @Autowired
    private RegisteredUserService registeredUserService;

    @GetMapping
    public ResponseEntity<ArrayList<RegisteredUser>> getAllRegisteredUsers(){
        return new ResponseEntity<ArrayList<RegisteredUser>>(registeredUserService.findAllRegisteredUsers(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RegisteredUser> getRegisteredUserById(@PathVariable("id") Long id){
        return new ResponseEntity<RegisteredUser>(registeredUserService.findRegisteredUserById(id), HttpStatus.OK);
    }

    @PostMapping
    public void register(@RequestBody RegistrationRequest request){
        registeredUserService.register(request);
    }

    @GetMapping("/confirm")
    public String confirm(@RequestParam("token") String token){
        return registeredUserService.confirmToken(token);
    }

    @PostMapping("/login")
    public RegisteredUser login(@RequestBody LoginRequest request){
        return registeredUserService.login(request);
    }

    @PutMapping
    public ResponseEntity<RegisteredUser> update(@RequestBody RegisteredUser user){
        return new ResponseEntity<RegisteredUser>(registeredUserService.updateUser(user), HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<UserDeleteRequest> createDeleteRequest(@RequestBody Long userId){
        return new ResponseEntity<UserDeleteRequest>(registeredUserService.createDeleteRequest(userId), HttpStatus.OK);
    }




    @PutMapping("/subscribe/adventure/{id}")
    public ResponseEntity<RegisteredUser> userAdventureSubscribe(@PathVariable("id") Long id, @RequestBody Long adventureId){
        return new ResponseEntity<RegisteredUser>(registeredUserService.userAdventureSubscribe(id, adventureId), HttpStatus.OK);
    }

    @PutMapping("/subscribe/boat/{id}")
    public ResponseEntity<RegisteredUser> userBoatSubscribe(@PathVariable("id") Long id, @RequestBody Long boatId){
        return new ResponseEntity<RegisteredUser>(registeredUserService.userBoatSubscribe(id, boatId), HttpStatus.OK);
    }

    @PutMapping("/subscribe/cabin/{id}")
    public ResponseEntity<RegisteredUser> userCabinSubscribe(@PathVariable("id") Long id, @RequestBody Long cabinId){
        return new ResponseEntity<RegisteredUser>(registeredUserService.userCabinSubscribe(id, cabinId), HttpStatus.OK);
    }



    @PutMapping("/unsubscribe/adventure/{id}")
    public ResponseEntity<RegisteredUser> userAdventureUnubscribe(@PathVariable("id") Long id, @RequestBody Long adventureId){
        return new ResponseEntity<RegisteredUser>(registeredUserService.userAdventureUnsubscribe(id, adventureId), HttpStatus.OK);
    }

    @PutMapping("/unsubscribe/boat/{id}")
    public ResponseEntity<RegisteredUser> userBoatUnsubscribe(@PathVariable("id") Long id, @RequestBody Long boatId){
        return new ResponseEntity<RegisteredUser>(registeredUserService.userBoatUnsubscribe(id, boatId), HttpStatus.OK);
    }

    @PutMapping("/unsubscribe/cabin/{id}")
    public ResponseEntity<RegisteredUser> userCabinUnsubscribe(@PathVariable("id") Long id, @RequestBody Long cabinId){
        return new ResponseEntity<RegisteredUser>(registeredUserService.userCabinUnsubscribe(id, cabinId), HttpStatus.OK);
    }
}

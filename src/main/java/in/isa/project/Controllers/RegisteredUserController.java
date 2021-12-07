package in.isa.project.Controllers;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import in.isa.project.Entities.LoginRequest;
import in.isa.project.Entities.RegisteredUser;
import in.isa.project.Entities.RegistrationRequest;
import in.isa.project.Services.RegisteredUserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class RegisteredUserController {
    @Autowired
    private RegisteredUserService registeredUserService;

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

    @DeleteMapping("/{id}")
    public ResponseEntity<RegisteredUser> delete(@PathVariable("id") Long id){
        System.out.println("kontroler");
        return new ResponseEntity<RegisteredUser>(registeredUserService.deleteUser(id), HttpStatus.OK);
    }
}

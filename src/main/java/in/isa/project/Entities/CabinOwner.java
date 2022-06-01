package in.isa.project.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CabinOwner extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public CabinOwner(String firstName, String lastName, String email, String password) {
        super(firstName, lastName, email, password);
    }

    public CabinOwner() {
        super();
    }

    public Long getId() {
        return id;
    } 
}

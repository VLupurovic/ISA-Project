package in.isa.project.Entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class FishingInstructor extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "instructor_id")
    private Long id;

    @OneToMany(mappedBy = "instructor", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Adventure> adventures;

    public FishingInstructor(String firstName, String lastName, String email, String password) {
        super(firstName, lastName, email, password);
    }

    public FishingInstructor() {
        super();
    }

    public Long getId() {
        return id;
    }

    public List<Adventure> getAdventures() {
        return adventures;
    }

    public void setAdventures(List<Adventure> adventures) {
        this.adventures = adventures;
    }
    
    
}

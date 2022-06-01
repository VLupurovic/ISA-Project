package in.isa.project.Entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cabin{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cabin_id")
    private Long id;
    private String name;
    private String address;
    private String description;
    private float averageRating;
    private Long cabinOwnerId;

    public void Update(Cabin cabin){
        name = cabin.name;
        address = cabin.address;
        description = cabin.description;
    }


    public Long getCabinOwnerId() {
        return cabinOwnerId;
    }

    public void setCabinOwnerId(Long cabinOwnerId) {
        this.cabinOwnerId = cabinOwnerId;
    }

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }


    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }


    public float getAverageRating() {
        return averageRating;
    }


    public void setAverageRating(float averageRating) {
        this.averageRating = averageRating;
    }    

    
}

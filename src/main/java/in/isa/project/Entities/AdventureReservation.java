package in.isa.project.Entities;
import java.time.LocalDateTime;
import javax.persistence.*;


@Entity
public class AdventureReservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adventure_reservation_id")
    private Long id;

    private Long registeredUserId;
    private Long adventureId;
    private Long adventureTermId;
    
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private float price;


    public Long getId() {
        return id;
    }
    public Long getRegisteredUserId() {
        return registeredUserId;
    }
    public void setRegisteredUserId(Long registeredUserId) {
        this.registeredUserId = registeredUserId;
    }
    public float getPrice() {
        return price;
    }
    public void setPrice(float price) {
        this.price = price;
    }
    public LocalDateTime getStartTime() {
        return startTime;
    }
    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }
    public LocalDateTime getEndTime() {
        return endTime;
    }
    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getAdventureId() {
        return adventureId;
    }
    public void setAdventureId(Long adventureId) {
        this.adventureId = adventureId;
    }
    public Long getAdventureTermId() {
        return adventureTermId;
    }
    
}

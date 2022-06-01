package in.isa.project.Entities;
import java.time.LocalDateTime;
import javax.persistence.*;


@Entity
public class CabinReservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cabin_reservation_id")
    private Long id;

    private Long registeredUserId;
    private Long cabinId;
    private Long cabinTermId;
    
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private float price;

    public Long getId() {
        return id;
    }
    public float getPrice() {
        return price;
    }
    public void setPrice(float price) {
        this.price = price;
    }
    public Long getRegisteredUserId() {
        return registeredUserId;
    }
    public void setRegisteredUserId(Long registeredUserId) {
        this.registeredUserId = registeredUserId;
    }
    public Long getCabinId() {
        return cabinId;
    }
    public void setCabinId(Long cabinId) {
        this.cabinId = cabinId;
    }
    public Long getCabinTermId() {
        return cabinTermId;
    }
    public void setCabinTermId(Long cabinTermId) {
        this.cabinTermId = cabinTermId;
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
}

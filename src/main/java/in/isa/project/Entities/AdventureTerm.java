package in.isa.project.Entities;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdventureTerm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adventure_term_id")
    private Long id;

    private Long adventureId;

    @Column(nullable = true)
    public String adventureName;
    public LocalDateTime startTime;
    public LocalDateTime endTime;
    private float pricePerDay;
    private boolean isPromo;
    @Column(nullable = true)
    private float discount;


    public AdventureTerm(Long adventureId2, LocalDateTime startTime2, LocalDateTime endTime2, float f) {
        adventureId = adventureId2;
        startTime = startTime2;
        endTime = endTime2;
        pricePerDay = f;
    }

    public AdventureTerm() {
    }

    public void Update(AdventureTerm adventureTerm){
        adventureId = adventureTerm.adventureId;
        startTime = adventureTerm.startTime;
        endTime = adventureTerm.endTime;
        pricePerDay = adventureTerm.pricePerDay;
    }

    public Long getId() {
        return id;
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
    public float getPricePerDay() {
        return pricePerDay;
    }
    public void setPricePerDay(float pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public boolean isPromo() {
        return isPromo;
    }

    public void setPromo(boolean isPromo) {
        this.isPromo = isPromo;
    }

    public float getDiscount() {
        return discount;
    }

    public void setDiscount(float discount) {
        this.discount = discount;
    }
}

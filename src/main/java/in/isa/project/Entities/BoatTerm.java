package in.isa.project.Entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BoatTerm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "boat_term_id")
    private Long id;

    private Long boatId;

    public LocalDateTime startTime;
    public LocalDateTime endTime;
    private float pricePerDay;
    private boolean isPromo;
    @Column(nullable = true)
    private float discount;

    public BoatTerm(Long boatId2, LocalDateTime startTime2, LocalDateTime endTime2, float f) {
        boatId = boatId2;
        startTime = startTime2;
        endTime = endTime2;
        pricePerDay = f;
    }


    public BoatTerm() {
    }


    public void Update(BoatTerm boatTerm){
        boatId = boatTerm.boatId;
        startTime = boatTerm.startTime;
        endTime = boatTerm.endTime;
        pricePerDay = boatTerm.pricePerDay;
    }

    public Long getId() {
        return id;
    }
    public Long getBoatId() {
        return boatId;
    }
    public void setBoatId(Long boatId) {
        this.boatId = boatId;
    }
    public float getPricePerDay() {
        return pricePerDay;
    }
    public void setPricePerDay(float pricePerDay) {
        this.pricePerDay = pricePerDay;
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

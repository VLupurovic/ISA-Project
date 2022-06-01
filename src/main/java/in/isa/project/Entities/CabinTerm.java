package in.isa.project.Entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CabinTerm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cabin_term_id")
    private Long id;

    private Long cabinId;

    public LocalDateTime startTime;
    public LocalDateTime endTime;
    private float pricePerDay;
    private boolean isPromo;
    @Column(nullable = true)
    private float discount;

    public CabinTerm(Long cabinId2, LocalDateTime startTime2, LocalDateTime endTime2, float f) {
        cabinId = cabinId2;
        startTime = startTime2;
        endTime = endTime2;
        pricePerDay = f;
    }

    public CabinTerm() {
    }

    public void Update(CabinTerm cabinTerm){
        cabinId = cabinTerm.cabinId;
        startTime = cabinTerm.startTime;
        endTime = cabinTerm.endTime;
        pricePerDay = cabinTerm.pricePerDay;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getCabinId() {
        return cabinId;
    }
    public void setCabinId(Long cabinId) {
        this.cabinId = cabinId;
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

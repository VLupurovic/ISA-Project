package in.isa.project.Entities;

import java.time.LocalDateTime;
import java.util.ArrayList;

import javax.persistence.*;


@Entity
public class BoatReservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "boat_reservation_id")
    private Long id;

    private Long registeredUserId;
    private Long boatId;
    private Long boatTermId;
    
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private float price;

    private ArrayList<Long> addedCommodityIds;

    public Long getId() {
        return id;
    }

    public Long getRegisteredUserId() {
        return registeredUserId;
    }

    public void setRegisteredUserId(Long registeredUserId) {
        this.registeredUserId = registeredUserId;
    }

    public Long getBoatId() {
        return boatId;
    }

    public void setBoatId(Long boatId) {
        this.boatId = boatId;
    }

    public Long getBoatTermId() {
        return boatTermId;
    }

    public void setBoatTermId(Long boatTermId) {
        this.boatTermId = boatTermId;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public ArrayList<Long> getAddedCommodityIds() {
        return addedCommodityIds;
    }

    public void setAddedCommodityIds(ArrayList<Long> addedCommodityIds) {
        this.addedCommodityIds = addedCommodityIds;
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

package in.isa.project.Entities.Reviews;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CabinOwnerReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long registeredUserId;
    private Long cabinOwnerId;
    private float rating;
    private String review;
    private boolean approved = false;

    public void Update(CabinOwnerReview areview){
        registeredUserId = areview.getRegisteredUserId();
        cabinOwnerId = areview.getCabinOwnerId();
        rating = areview.getRating();
        review = areview.getReview();
    }

    public Long getId() {
        return id;
    }
    public Long getRegisteredUserId() {
        return registeredUserId;
    }
    public void setRegisteredUserId(Long registeredUserId) {
        this.registeredUserId = registeredUserId;
    }
    public Long getCabinOwnerId() {
        return cabinOwnerId;
    }
    public void setCabinOwnerId(Long cabinOwnerId) {
        this.cabinOwnerId = cabinOwnerId;
    }
    public float getRating() {
        return rating;
    }
    public void setRating(float rating) {
        this.rating = rating;
    }
    public String getReview() {
        return review;
    }
    public void setReview(String review) {
        this.review = review;
    }
    public boolean isApproved() {
        return approved;
    }
    public void setApproved(boolean approved) {
        this.approved = approved;
    }

    
}

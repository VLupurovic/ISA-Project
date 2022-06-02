package in.isa.project.Entities.Complaints;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CabinOwnerComplaint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long registeredUserId;
    private Long cabinOwnerId;
    private String complaint;
    
    public Long getId() {
        return id;
    }
    public Long getRegisteredUserId() {
        return registeredUserId;
    }
    public void setRegisteredUserId(Long registeredUserId) {
        this.registeredUserId = registeredUserId;
    }
    public String getComplaint() {
        return complaint;
    }
    public void setComplaint(String complaint) {
        this.complaint = complaint;
    }
    public Long getCabinOwnerId() {
        return cabinOwnerId;
    }
    public void setCabinOwnerId(Long cabinOwnerId) {
        this.cabinOwnerId = cabinOwnerId;
    }

    
}

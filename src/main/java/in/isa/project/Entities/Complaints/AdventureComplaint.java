package in.isa.project.Entities.Complaints;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdventureComplaint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long registeredUserId;
    private Long adventureId;
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
    public Long getAdventureId() {
        return adventureId;
    }
    public void setAdventureId(Long adventureId) {
        this.adventureId = adventureId;
    }
    public String getComplaint() {
        return complaint;
    }
    public void setComplaint(String complaint) {
        this.complaint = complaint;
    }

    
}

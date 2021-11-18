package in.isa.project.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Table(name="fishing_instructor")
@Entity
public class FishingInstructor extends User{
    @Column(name="avg_serv_rating")
    private float averageServiceRating;
}

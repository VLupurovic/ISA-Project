package in.isa.project.Entities;

import java.io.Serializable;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Cabin implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String address;
    private String description;
    private float averageRating;
}

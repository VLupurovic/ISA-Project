package in.isa.project.Entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import in.isa.project.Security.Confirmation.ConfirmationToken;

@Entity
public class RegisteredUser extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "registered_user_id")
    private Long id;

    private String address;
    private String city;
    private String country;
    private String phoneNumber;
    private int points;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "registeredUser")
    private List<ConfirmationToken> tokens;

    private ArrayList<Long> adventureSubscriptions = new ArrayList<Long>();
    private ArrayList<Long> boatSubscriptions = new ArrayList<Long>();
    private ArrayList<Long> cabinSubscriptions = new ArrayList<Long>();

    public void Update(RegisteredUser user){
        this.setPassword(user.getPassword());
        this.setFirstName(user.getFirstName());
        this.setLastName(user.getLastName());
        this.address = user.address;
        this.city = user.city;
        this.country = user.country;
        this.phoneNumber = user.phoneNumber;
        this.points = user.points;
    }


    public int getPoints() {
        return points;
    }


    public void setPoints(int points) {
        this.points = points;
    }


    public RegisteredUser(String firstName, String lastName, String email, String password, String address, String city, String country, String phoneNumber) {
        super(firstName, lastName, email, password);
        this.address = address;
        this.city = city;
        this.country = country;
        this.phoneNumber = phoneNumber;
    }

    public RegisteredUser() {
    }

    public Long getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }


    public ArrayList<Long> getAdventureSubscriptions() {
        return adventureSubscriptions;
    }


    public void setAdventureSubscriptions(ArrayList<Long> adventureSubscriptions) {
        this.adventureSubscriptions = adventureSubscriptions;
    }


    public ArrayList<Long> getBoatSubscriptions() {
        return boatSubscriptions;
    }


    public void setBoatSubscriptions(ArrayList<Long> boatSubscriptions) {
        this.boatSubscriptions = boatSubscriptions;
    }


    public ArrayList<Long> getCabinSubscriptions() {
        return cabinSubscriptions;
    }


    public void setCabinSubscriptions(ArrayList<Long> cabinSubscriptions) {
        this.cabinSubscriptions = cabinSubscriptions;
    }
    
}

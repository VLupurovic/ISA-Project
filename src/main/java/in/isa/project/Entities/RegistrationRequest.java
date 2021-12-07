package in.isa.project.Entities;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    private final String firstName;
    private final String lastName;
    private final String email;
    private final String password;
    private final String address;
    private final String city;
    private final String country;
    private final String phoneNumber;

    public RegistrationRequest(String firstName, String lastName, String email, String password, String address, String city, String country, String phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.city = city;
        this.country = country;
        this.phoneNumber = phoneNumber;
    }
    
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public String getAddress() {
        return address;
    }
    public String getCity() {
        return city;
    }
    public String getCountry() {
        return country;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }

    
}

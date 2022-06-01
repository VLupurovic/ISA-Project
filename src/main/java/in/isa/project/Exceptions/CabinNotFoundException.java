package in.isa.project.Exceptions;

public class CabinNotFoundException extends RuntimeException{
    public CabinNotFoundException(String message){
        super(message);
    }
}
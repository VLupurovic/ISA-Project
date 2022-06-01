package in.isa.project.Security;


import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class EmailValidator implements Predicate<String>{
    @Override
    public boolean test(String s){
        //TODO Regex za validaciju mejla
        return true;
    }
}

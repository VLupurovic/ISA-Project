package in.isa.project.Security.Confirmation;

import java.time.LocalDateTime;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {
    @Autowired
    private ConfirmationTokenRepo confirmationTokenRepo;

    public void saveConfirmationToken(ConfirmationToken token){
        confirmationTokenRepo.save(token);
    }

    public Optional<ConfirmationToken> getToken(String token){
        return confirmationTokenRepo.findByToken(token);
    }

    public int setConfirmedAt(String token){
        return confirmationTokenRepo.updateConfirmedAt(token, LocalDateTime.now());
    }
}

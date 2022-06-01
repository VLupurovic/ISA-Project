package in.isa.project.Services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.isa.project.Entities.AdventureReservation;
import in.isa.project.Entities.AdventureTerm;
import in.isa.project.Entities.BoatReservation;
import in.isa.project.Entities.BoatTerm;
import in.isa.project.Entities.CabinReservation;
import in.isa.project.Entities.CabinTerm;
import in.isa.project.Entities.RegisteredUser;
import in.isa.project.Repositories.AdventureReservationRepo;
import in.isa.project.Repositories.BoatReservationRepo;
import in.isa.project.Repositories.CabinReservationRepo;
import in.isa.project.Security.Email.EmailSender;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Service
public class ReservationService {
    @Autowired
    private AdventureReservationRepo adventureReservationRepo;
    @Autowired
    private CabinReservationRepo cabinReservationRepo;
    @Autowired
    private BoatReservationRepo boatReservationRepo;
    @Autowired
    private EmailSender emailSender;
    @Autowired
    private RegisteredUserService registeredUserService;
    @Autowired
    TermService termService;

    public ArrayList<AdventureReservation> getAllAdventureReservations(){
        return adventureReservationRepo.findAll();
    }

    public ArrayList<BoatReservation> getAllBoatReservations(){
        return boatReservationRepo.findAll();
    }

    public ArrayList<CabinReservation> getAllCabinReservations(){
        return cabinReservationRepo.findAll();
    }

    public AdventureReservation createAdventureReservation(AdventureReservation reservation){
        AdventureTerm term = termService.findAdventureTermById(reservation.getAdventureTermId());

        if(reservation.getStartTime().isAfter(term.getStartTime()) && term.getEndTime().isEqual(reservation.getEndTime())){
            //ako se poslednji datum poklapa
            term.setEndTime(reservation.getStartTime());
            termService.updateAdventureTerm(term.getId(), term);
        }
        else if(term.getStartTime().isEqual(reservation.getStartTime()) && reservation.getEndTime().isBefore(term.getEndTime())){
            //ako se prvi datum poklapa
            term.setStartTime(reservation.getEndTime());
            termService.updateAdventureTerm(term.getId(), term);
        }
        else if(reservation.getStartTime().isAfter(term.getStartTime()) && reservation.getEndTime().isBefore(term.getEndTime())){
            //ako je rezervacija u sredini termina
            AdventureTerm newTerm1 = new AdventureTerm();
            AdventureTerm newTerm2 = new AdventureTerm();
            newTerm1.Update(term);
            newTerm2.Update(term);
            newTerm1.setEndTime(reservation.getStartTime());
            newTerm2.setStartTime(reservation.getEndTime());

            termService.deleteAdventureTerm(term.getId());
            termService.addAdventureTerm(newTerm1);
            termService.addAdventureTerm(newTerm2);
        }
        else if(reservation.getStartTime().isEqual(term.getStartTime()) && reservation.getEndTime().isEqual(term.getEndTime())){
            termService.deleteAdventureTerm(term.getId());
        }
        RegisteredUser user = registeredUserService.findRegisteredUserById(reservation.getRegisteredUserId());
        emailSender.send(user.getEmail(), buildEmail());
        return adventureReservationRepo.save(reservation);
    }

    public BoatReservation createBoatReservation(BoatReservation reservation){
        BoatTerm term = termService.findBoatTermById(reservation.getBoatTermId());

        if(reservation.getStartTime().isAfter(term.getStartTime()) && term.getEndTime().isEqual(reservation.getEndTime())){
            //ako se poslednji datum poklapa
            term.setEndTime(reservation.getStartTime());
            termService.updateBoatTerm(term.getId(), term);
        }
        else if(term.getStartTime().isEqual(reservation.getStartTime()) && reservation.getEndTime().isBefore(term.getEndTime())){
            //ako se prvi datum poklapa
            term.setStartTime(reservation.getEndTime());
            termService.updateBoatTerm(term.getId(), term);
        }
        else if(reservation.getStartTime().isAfter(term.getStartTime()) && reservation.getEndTime().isBefore(term.getEndTime())){
            //ako je rezervacija u sredini termina
            BoatTerm newTerm1 = new BoatTerm();
            BoatTerm newTerm2 = new BoatTerm();
            newTerm1.Update(term);
            newTerm2.Update(term);
            newTerm1.setEndTime(reservation.getStartTime());
            newTerm2.setStartTime(reservation.getEndTime());

            termService.deleteBoatTerm(term.getId());
            termService.addBoatTerm(newTerm1);
            termService.addBoatTerm(newTerm2);
        }
        else if(reservation.getStartTime().isEqual(term.getStartTime()) && reservation.getEndTime().isEqual(term.getEndTime())){
            termService.deleteBoatTerm(term.getId());
        }
        RegisteredUser user = registeredUserService.findRegisteredUserById(reservation.getRegisteredUserId());
        emailSender.send(user.getEmail(), buildEmail());
        return boatReservationRepo.save(reservation);
    }

    public CabinReservation createCabinReservation(CabinReservation reservation){
        CabinTerm term = termService.findCabinTermById(reservation.getCabinTermId());
        if(reservation.getStartTime().isAfter(term.getStartTime()) && term.getEndTime().isEqual(reservation.getEndTime())){
            //ako se poslednji datum poklapa
            term.setEndTime(reservation.getStartTime());
            termService.updateCabinTerm(term.getId(), term);
        }
        else if(term.getStartTime().isEqual(reservation.getStartTime()) && reservation.getEndTime().isBefore(term.getEndTime())){
            //ako se prvi datum poklapa
            term.setStartTime(reservation.getEndTime());
            termService.updateCabinTerm(term.getId(), term);
        }
        else if(reservation.getStartTime().isAfter(term.getStartTime()) && reservation.getEndTime().isBefore(term.getEndTime())){
            //ako je rezervacija u sredini termina
            CabinTerm newTerm1 = new CabinTerm();
            CabinTerm newTerm2 = new CabinTerm();
            newTerm1.Update(term);
            newTerm2.Update(term);
            newTerm1.setEndTime(reservation.getStartTime());
            newTerm2.setStartTime(reservation.getEndTime());

            termService.deleteCabinTerm(term.getId());
            termService.addCabinTerm(newTerm1);
            termService.addCabinTerm(newTerm2);
        }
        else if(reservation.getStartTime().isEqual(term.getStartTime()) && reservation.getEndTime().isEqual(term.getEndTime())){
            termService.deleteCabinTerm(term.getId());
        }
        RegisteredUser user = registeredUserService.findRegisteredUserById(reservation.getRegisteredUserId());
        emailSender.send(user.getEmail(), buildEmail());
        return cabinReservationRepo.save(reservation);
    }

    private String buildEmail() {
        return "<h1>Successful reservation!</h1>";
    }



    //Upcoming reservations
    public ArrayList<AdventureReservation> getUserAdventureReservations(Long id){
        ArrayList<AdventureReservation> toReturn = new ArrayList<AdventureReservation>();
        ArrayList<AdventureReservation> allReservations = new ArrayList<AdventureReservation>();
        allReservations = adventureReservationRepo.findAll();
        for(AdventureReservation res: allReservations){
            if (LocalDateTime.now().isBefore(res.getStartTime())){
                toReturn.add(res);
            }
        }
        return toReturn;
    }

    public ArrayList<BoatReservation> getUserBoatReservations(Long id){
        ArrayList<BoatReservation> toReturn = new ArrayList<BoatReservation>();
        ArrayList<BoatReservation> allReservations = new ArrayList<BoatReservation>();
        allReservations = boatReservationRepo.findAll();
        for(BoatReservation res: allReservations){
            if (LocalDateTime.now().isBefore(res.getStartTime())){
                toReturn.add(res);
            }
        }
        return toReturn;
    }

    public ArrayList<CabinReservation> getUserCabinReservations(Long id){
        ArrayList<CabinReservation> toReturn = new ArrayList<CabinReservation>();
        ArrayList<CabinReservation> allReservations = new ArrayList<CabinReservation>();
        allReservations = cabinReservationRepo.findAll();
        for(CabinReservation res: allReservations){
            if (LocalDateTime.now().isBefore(res.getStartTime())){
                toReturn.add(res);
            }
        }
        return toReturn;
    }



    //Past reservations
    public ArrayList<AdventureReservation> getUserPastAdventureReservations(Long id){
        ArrayList<AdventureReservation> toReturn = new ArrayList<AdventureReservation>();
        ArrayList<AdventureReservation> allReservations = new ArrayList<AdventureReservation>();
        allReservations = adventureReservationRepo.findAll();
        for(AdventureReservation res: allReservations){
            if (LocalDateTime.now().isAfter(res.getEndTime())){
                toReturn.add(res);
            }
        }
        return toReturn;
    }

    public ArrayList<BoatReservation> getUserPastBoatReservations(Long id){
        ArrayList<BoatReservation> toReturn = new ArrayList<BoatReservation>();
        ArrayList<BoatReservation> allReservations = new ArrayList<BoatReservation>();
        allReservations = boatReservationRepo.findAll();
        for(BoatReservation res: allReservations){
            if (LocalDateTime.now().isAfter(res.getEndTime())){
                toReturn.add(res);
            }
        }
        return toReturn;
    }

    public ArrayList<CabinReservation> getUserPastCabinReservations(Long id){
        ArrayList<CabinReservation> toReturn = new ArrayList<CabinReservation>();
        ArrayList<CabinReservation> allReservations = new ArrayList<CabinReservation>();
        allReservations = cabinReservationRepo.findAll();
        for(CabinReservation res: allReservations){
            if (LocalDateTime.now().isAfter(res.getEndTime())){
                toReturn.add(res);
            }
        }
        return toReturn;
    }



    //Delete reservations
    public void deleteAdventureReservation(Long id){
        Optional<AdventureReservation> res = adventureReservationRepo.findById(id);
        adventureReservationRepo.delete(res.get());
        AdventureTerm newTerm = new AdventureTerm();
        newTerm.Update(new AdventureTerm(res.get().getAdventureId(), res.get().getStartTime(), res.get().getEndTime(), res.get().getPrice() / (ChronoUnit.DAYS.between(res.get().getStartTime(), res.get().getEndTime()))));
        termService.addAdventureTerm(newTerm);
    }

    public void deleteBoatReservation(Long id){
        Optional<BoatReservation> res = boatReservationRepo.findById(id);
        boatReservationRepo.delete(res.get());
        BoatTerm newTerm = new BoatTerm();
        newTerm.Update(new BoatTerm(res.get().getBoatId(), res.get().getStartTime(), res.get().getEndTime(), res.get().getPrice() / (ChronoUnit.DAYS.between(res.get().getStartTime(), res.get().getEndTime()))));
        termService.addBoatTerm(newTerm);
    }

    public void deleteCabinReservation(Long id){
        Optional<CabinReservation> res = cabinReservationRepo.findById(id);
        cabinReservationRepo.delete(res.get());
        CabinTerm newTerm = new CabinTerm();
        newTerm.Update(new CabinTerm(res.get().getCabinId(), res.get().getStartTime(), res.get().getEndTime(), res.get().getPrice() / (ChronoUnit.DAYS.between(res.get().getStartTime(), res.get().getEndTime()))));
        termService.addCabinTerm(newTerm);
    }



    public AdventureReservation findAdventureReservationById(Long id){
        return adventureReservationRepo.findById(id).get();
    }

    public BoatReservation findBoatReservationById(Long id){
        return boatReservationRepo.findById(id).get();
    }

    public CabinReservation findCabinReservationById(Long id){
        return cabinReservationRepo.findById(id).get();
    }
}

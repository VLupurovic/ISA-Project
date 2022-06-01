import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoatTerm } from 'src/app/models/boat-term';
import { RegisteredUser } from 'src/app/models/registered-user';
import { BoatService } from 'src/app/services/boat.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TermsService } from 'src/app/services/terms.service';
import { BoatReservation } from 'src/app/models/boat-reservation';
import { Boat } from 'src/app/models/boat';

@Component({
  selector: 'app-boat-term-info',
  templateUrl: './boat-term-info.component.html',
  styleUrls: ['./boat-term-info.component.css']
})
export class BoatTermInfoComponent implements OnInit {
  helpDate: Date = new Date();
  boatTerm: BoatTerm = new BoatTerm();
  boat: Boat = new Boat();
  boatReservation: BoatReservation = new BoatReservation();
  duration: string = "";
  startDateString: string = "";
  x:any = "";
  loggedUser: RegisteredUser = new RegisteredUser();

  constructor(private reservationService: ReservationService, private boatService: BoatService, private termService: TermsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTermById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  private getTermById(id: number){
    this.termService.getBoatTermById(id).subscribe(
      (data:BoatTerm) => {
        this.boatTerm = data
        this.boatService.getBoatById(this.boatTerm.boatId).subscribe(data => { this.boatTerm.name = data.name })
        this.boatService.getBoatById(this.boatTerm.boatId).subscribe(data => { this.boatTerm.rating = data.averageRating })
        this.boatService.getBoatById(this.boatTerm.boatId).subscribe(data => { this.boat = data })
        this.boatTerm.startTime = this.boatTerm.startTime.substring(0,10)
        this.boatTerm.endTime = this.boatTerm.endTime.substring(0,10)
      }
    );
  }  

  createReservation(){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)

    this.boatReservation.registeredUserId = this.loggedUser.id


    this.boatReservation.startTime = new Date(Date.parse(this.startDateString))
    this.helpDate = this.boatReservation.startTime;
    this.helpDate.setDate(this.boatReservation.startTime.getDate() + Number(this.duration))
    this.boatReservation.startTime = new Date(Date.parse(this.startDateString))
    this.boatReservation.endTime = new Date(this.helpDate)

    this.boatReservation.boatId = this.boatTerm.boatId;
    this.boatReservation.price = Number(this.duration) * this.boatTerm.pricePerDay
    this.boatReservation.boatTermId = this.boatTerm.id;
    this.reservationService.createBoatReservation(this.boatReservation).subscribe()
  }

  addCommodityToReservation(id: number){
    this.boatReservation.addedCommodityIds.push(id);
  }
}

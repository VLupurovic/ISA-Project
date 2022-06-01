import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adventure } from 'src/app/models/adventure';
import { AdventureReservation } from 'src/app/models/adventure-reservation';
import { AdventureTerm } from 'src/app/models/adventure-term';
import { RegisteredUser } from 'src/app/models/registered-user';
import { AdventureService } from 'src/app/services/adventure.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TermsService } from 'src/app/services/terms.service';

@Component({
  selector: 'app-adventure-term-info',
  templateUrl: './adventure-term-info.component.html',
  styleUrls: ['./adventure-term-info.component.css']
})
export class AdventureTermInfoComponent implements OnInit {
  helpDate: Date = new Date();
  adventureTerm: AdventureTerm = new AdventureTerm();
  adventureReservation: AdventureReservation = new AdventureReservation();
  duration: string = "";
  startDateString: string = "";
  adventureName: string = "";
  x:any = "";
  loggedUser: RegisteredUser = new RegisteredUser();

  constructor(private reservationService: ReservationService, private adventureService: AdventureService, private termService: TermsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTermById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  private getTermById(id: number){
    this.termService.getAdventureTermById(id).subscribe(
      (data:AdventureTerm) => {
        console.log(data);
        this.adventureTerm = data
        this.adventureService.getAdventureById(this.adventureTerm.adventureId).subscribe(data => { this.adventureName = data.name })
        this.adventureService.getAdventureById(this.adventureTerm.adventureId).subscribe(data => { this.adventureTerm.rating = data.averageRating })
        this.adventureTerm.startTime = this.adventureTerm.startTime.substring(0,10)
        this.adventureTerm.endTime = this.adventureTerm.endTime.substring(0,10)
      }
    );
  }  

  createReservation(){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)

    this.adventureReservation.registeredUserId = this.loggedUser.id


    this.adventureReservation.startTime = new Date(Date.parse(this.startDateString))
    this.helpDate = this.adventureReservation.startTime
    this.helpDate.setDate(this.adventureReservation.startTime.getDate() + Number(this.duration))
    this.adventureReservation.startTime = new Date(Date.parse(this.startDateString))
    this.adventureReservation.endTime = this.helpDate;

    this.adventureReservation.adventureId = this.adventureTerm.adventureId;
    this.adventureReservation.price = Number(this.duration) * this.adventureTerm.pricePerDay
    this.adventureReservation.adventureTermId = this.adventureTerm.id;
    this.reservationService.createAdventureReservation(this.adventureReservation).subscribe()
  }

  createFastReservation(){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)

    this.adventureReservation.registeredUserId = this.loggedUser.id


    this.adventureReservation.startTime = new Date(Date.parse(this.adventureTerm.startTime))
    this.adventureReservation.endTime = new Date(Date.parse(this.adventureTerm.endTime))

    this.adventureReservation.adventureId = this.adventureTerm.adventureId;
    this.adventureReservation.price = Number(this.duration) * this.adventureTerm.pricePerDay
    this.adventureReservation.adventureTermId = this.adventureTerm.id;
    this.reservationService.createAdventureReservation(this.adventureReservation).subscribe()
  }
}

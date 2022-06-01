import { RegisteredUser } from './../../models/registered-user';
import { AdventureReservation } from './../../models/adventure-reservation';
import { TermsService } from './../../services/terms.service';
import { AdventureTerm } from 'src/app/models/adventure-term';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventureService } from 'src/app/services/adventure.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { Adventure } from 'src/app/models/adventure';

@Component({
  selector: 'app-term-info',
  templateUrl: './term-info.component.html',
  styleUrls: ['./term-info.component.css']
})
export class TermInfoComponent implements OnInit {
  tempAdventure: Adventure = new Adventure();
  helpDate: Date = new Date();
  adventureTerm: AdventureTerm = new AdventureTerm();
  adventureReservation: AdventureReservation = new AdventureReservation();
  duration: string = "";
  startDateString: string = "";
  x:any = "";
  loggedUser: RegisteredUser = new RegisteredUser();

  constructor(private reservationService: ReservationService, private adventureService: AdventureService, private termService: TermsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTermById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  private getTermById(id: number){
    this.termService.getAdventureTermById(id).subscribe(
      (data:AdventureTerm) => {
        this.adventureTerm = data
        this.adventureService.getAdventureById(this.adventureTerm.id).subscribe(data => { this.adventureTerm.name = data.name })
        this.adventureService.getAdventureById(this.adventureTerm.id).subscribe(data => { this.adventureTerm.rating = data.averageRating })
        this.adventureTerm.startTime = this.adventureTerm.startTime.substring(0,10)
        this.adventureTerm.endTime = this.adventureTerm.endTime.substring(0,10)

      }
    );
  }  

  createReservation(){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)

    this.adventureReservation.registeredUserId = this.loggedUser.id

    //adventureId se postavlja u backend-u

    this.adventureReservation.startTime = new Date(Date.parse(this.startDateString))

    this.helpDate.setDate(this.adventureReservation.startTime.getDate() + Number(this.duration))
    this.adventureReservation.endTime = new Date(this.helpDate)

    this.adventureReservation.price = Number(this.duration) * this.adventureTerm.pricePerDay
    this.reservationService.createAdventureReservation(this.adventureReservation).subscribe()
  }
}

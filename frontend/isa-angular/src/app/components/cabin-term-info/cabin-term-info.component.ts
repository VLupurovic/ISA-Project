import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CabinReservation } from 'src/app/models/cabin-reservation';
import { CabinTerm } from 'src/app/models/cabin-term';
import { RegisteredUser } from 'src/app/models/registered-user';
import { CabinService } from 'src/app/services/cabin.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TermsService } from 'src/app/services/terms.service';

@Component({
  selector: 'app-cabin-term-info',
  templateUrl: './cabin-term-info.component.html',
  styleUrls: ['./cabin-term-info.component.css']
})
export class CabinTermInfoComponent implements OnInit {
  helpDate: Date = new Date();
  cabinTerm: CabinTerm = new CabinTerm();
  cabinReservation: CabinReservation = new CabinReservation();
  duration: string = "";
  startDateString: string = "";
  x:any = "";
  loggedUser: RegisteredUser = new RegisteredUser();

  constructor(private reservationService: ReservationService, private cabinService: CabinService, private termService: TermsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTermById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  private getTermById(id: number){
    this.termService.getCabinTermById(id).subscribe(
      (data:CabinTerm) => {
        this.cabinTerm = data
        this.cabinService.getCabinById(this.cabinTerm.cabinId).subscribe(data => { this.cabinTerm.name = data.name })
        this.cabinService.getCabinById(this.cabinTerm.cabinId).subscribe(data => { this.cabinTerm.rating = data.averageRating })
        this.cabinTerm.startTime = this.cabinTerm.startTime.substring(0,10)
        this.cabinTerm.endTime = this.cabinTerm.endTime.substring(0,10)
      }
    );
  }  

  createReservation(){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)

    this.cabinReservation.registeredUserId = this.loggedUser.id


    this.cabinReservation.startTime = new Date(Date.parse(this.startDateString))
    this.helpDate = this.cabinReservation.startTime
    this.helpDate.setDate(this.cabinReservation.startTime.getDate() + Number(this.duration))
    this.cabinReservation.startTime = new Date(Date.parse(this.startDateString))
    this.cabinReservation.endTime = new Date(this.helpDate)

    this.cabinReservation.cabinId = this.cabinTerm.cabinId;
    this.cabinReservation.price = Number(this.duration) * this.cabinTerm.pricePerDay
    this.cabinReservation.cabinTermId = this.cabinTerm.id;
    this.reservationService.createCabinReservation(this.cabinReservation).subscribe()
  }
}

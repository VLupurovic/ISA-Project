import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventureReservation } from 'src/app/models/adventure-reservation';
import { BoatComplaint } from 'src/app/models/boat-complaint';
import { BoatOwner } from 'src/app/models/boat-owner';
import { BoatOwnerComplaint } from 'src/app/models/boat-owner-complaint';
import { BoatReservation } from 'src/app/models/boat-reservation';
import { FishingInstructor } from 'src/app/models/fishing-instructor';
import { BoatService } from 'src/app/services/boat.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-past-boat-complaint',
  templateUrl: './past-boat-complaint.component.html',
  styleUrls: ['./past-boat-complaint.component.css']
})
export class PastBoatComplaintComponent implements OnInit {
  reservation: BoatReservation = new BoatReservation();
  boatOwner: BoatOwner = new BoatOwner();
  boatName: string;
  boatComplaint: BoatComplaint = new BoatComplaint();
  boatOwnerComplaint: BoatOwnerComplaint = new BoatOwnerComplaint();
  

  constructor(private reservationService: ReservationService, private activatedRoute: ActivatedRoute, private boatService: BoatService) { }

  ngOnInit(): void {
    this.getBoatReservationById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  private getBoatReservationById(id: number){
    this.reservationService.getBoatReservationById(id).subscribe(
      (data:BoatReservation) => {
        this.reservation = data
        this.boatService.getBoatById(this.reservation.boatId).subscribe(data => { 
          this.boatName = data.name
          this.boatService.getOwnerById(data.boatOwnerId).subscribe(data => {
            this.boatOwner = data
          })
        })
      }
    );
  }

  leaveComplaint(){
    if(this.boatComplaint.complaint){
      this.boatComplaint.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.boatComplaint.boatId = this.reservation.boatId;
      this.boatService.createBoatComplaint(this.boatComplaint).subscribe();
    }
    
    if(this.boatOwnerComplaint.complaint){
      this.boatOwnerComplaint.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.boatOwnerComplaint.boatOwnerId = this.boatOwner.id;
      this.boatService.createBoatOwnerComplaint(this.boatOwnerComplaint).subscribe();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoatOwner } from 'src/app/models/boat-owner';
import { BoatOwnerReview } from 'src/app/models/boat-owner-review';
import { BoatReservation } from 'src/app/models/boat-reservation';
import { BoatReview } from 'src/app/models/boat-review';
import { AdventureService } from 'src/app/services/adventure.service';
import { BoatService } from 'src/app/services/boat.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-past-boat-reservation-info',
  templateUrl: './past-boat-reservation-info.component.html',
  styleUrls: ['./past-boat-reservation-info.component.css']
})
export class PastBoatReservationInfoComponent implements OnInit {
  reservation: BoatReservation = new BoatReservation();
  owner: BoatOwner = new BoatOwner();
  boatName: string;
  review: BoatReview = new BoatReview();
  ownerReview: BoatOwnerReview = new BoatOwnerReview();
  

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
            this.owner = data
          })
        })
      }
    );
  }

  leaveRating(id: number){
    this.review.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.review.boatId = this.reservation.boatId;
    this.boatService.createBoatReview(this.review).subscribe();

    this.ownerReview.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ownerReview.boatOwnerId = this.owner.id;
    this.boatService.createBoatOwnerReview(this.ownerReview).subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CabinOwner } from 'src/app/models/cabin-owner';
import { CabinOwnerReview } from 'src/app/models/cabin-owner-review';
import { CabinReservation } from 'src/app/models/cabin-reservation';
import { CabinReview } from 'src/app/models/cabin-review';
import { CabinService } from 'src/app/services/cabin.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-past-cabin-reservation-info',
  templateUrl: './past-cabin-reservation-info.component.html',
  styleUrls: ['./past-cabin-reservation-info.component.css']
})
export class PastCabinReservationInfoComponent implements OnInit {

  reservation: CabinReservation = new CabinReservation();
  owner: CabinOwner = new CabinOwner();
  cabinName: string;
  review: CabinReview = new CabinReview();
  ownerReview: CabinOwnerReview = new CabinOwnerReview();
  

  constructor(private reservationService: ReservationService, private activatedRoute: ActivatedRoute, private cabinService: CabinService) { }

  ngOnInit(): void {
    this.getCabinReservationById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  private getCabinReservationById(id: number){
    this.reservationService.getCabinReservationById(id).subscribe(
      (data:CabinReservation) => {
        this.reservation = data
        this.cabinService.getCabinById(this.reservation.cabinId).subscribe(data => { 
          this.cabinName = data.name
          this.cabinService.getOwnerById(data.cabinOwnerId).subscribe(data => {
            this.owner = data
          })
        })
      }
    );
  }

  leaveRating(id: number){
    this.review.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.review.cabinId = this.reservation.cabinId;
    this.cabinService.createCabinReview(this.review).subscribe();

    this.ownerReview.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.ownerReview.cabinOwnerId = this.owner.id;
    this.cabinService.createCabinOwnerReview(this.ownerReview).subscribe();
  }
}

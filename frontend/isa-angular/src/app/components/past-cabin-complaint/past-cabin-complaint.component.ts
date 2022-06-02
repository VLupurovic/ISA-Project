import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CabinComplaint } from 'src/app/models/cabin-complaint';
import { CabinOwner } from 'src/app/models/cabin-owner';
import { CabinOwnerComplaint } from 'src/app/models/cabin-owner-complaint';
import { CabinReservation } from 'src/app/models/cabin-reservation';
import { CabinService } from 'src/app/services/cabin.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-past-cabin-complaint',
  templateUrl: './past-cabin-complaint.component.html',
  styleUrls: ['./past-cabin-complaint.component.css']
})
export class PastCabinComplaintComponent implements OnInit {
  reservation: CabinReservation = new CabinReservation();
  cabinOwner: CabinOwner = new CabinOwner();
  cabinName: string;
  cabinComplaint: CabinComplaint = new CabinComplaint();
  cabinOwnerComplaint: CabinOwnerComplaint = new CabinOwnerComplaint();
  

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
            this.cabinOwner = data
          })
        })
      }
    );
  }

  leaveComplaint(){
    if(this.cabinComplaint.complaint){
      this.cabinComplaint.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.cabinComplaint.cabinId = this.reservation.cabinId;
      this.cabinService.createCabinComplaint(this.cabinComplaint).subscribe();
    }

    if(this.cabinOwnerComplaint.complaint){
      this.cabinOwnerComplaint.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.cabinOwnerComplaint.cabinOwnerId = this.cabinOwner.id;
      this.cabinService.createCabinOwnerComplaint(this.cabinOwnerComplaint).subscribe();
    }
  }
}

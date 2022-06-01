import { FishingInstructor } from './../../models/fishing-instructor';
import { InstructorReview } from './../../models/instructor-review';
import { AdventureReview } from './../../models/adventure-review';
import { AdventureReservation } from 'src/app/models/adventure-reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventureService } from 'src/app/services/adventure.service';

@Component({
  selector: 'app-past-adventure-reservation-info',
  templateUrl: './past-adventure-reservation-info.component.html',
  styleUrls: ['./past-adventure-reservation-info.component.css']
})
export class PastAdventureReservationInfoComponent implements OnInit {
  reservation: AdventureReservation = new AdventureReservation();
  instructor: FishingInstructor = new FishingInstructor();
  adventureName: string;
  review: AdventureReview = new AdventureReview();
  instructorReview: InstructorReview = new InstructorReview();
  

  constructor(private reservationService: ReservationService, private activatedRoute: ActivatedRoute, private adventureService: AdventureService) { }

  ngOnInit(): void {
    this.getAdventureReservationById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  private getAdventureReservationById(id: number){
    this.reservationService.getAdventureReservationById(id).subscribe(
      (data:AdventureReservation) => {
        this.reservation = data
        this.adventureService.getAdventureById(this.reservation.adventureId).subscribe(data => { 
          this.adventureName = data.name
          this.adventureService.getInstructorById(data.instructorId).subscribe(data => {
            this.instructor = data
          })
        })
      }
    );
  }

  leaveRating(id: number){
    this.review.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.review.adventureId = this.reservation.adventureId;
    this.adventureService.createAdventureReview(this.review).subscribe();

    this.instructorReview.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.instructorReview.fishingInstructorId = this.instructor.id;
    this.adventureService.createInstructorReview(this.instructorReview).subscribe();
  }
}

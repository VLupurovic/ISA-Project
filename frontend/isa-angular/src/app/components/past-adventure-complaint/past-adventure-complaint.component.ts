import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdventureComplaint } from 'src/app/models/adventure-complaint';
import { AdventureReservation } from 'src/app/models/adventure-reservation';
import { AdventureReview } from 'src/app/models/adventure-review';
import { FishingInstructor } from 'src/app/models/fishing-instructor';
import { InstructorComplaint } from 'src/app/models/instructor-complaint';
import { InstructorReview } from 'src/app/models/instructor-review';
import { AdventureService } from 'src/app/services/adventure.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-past-adventure-complaint',
  templateUrl: './past-adventure-complaint.component.html',
  styleUrls: ['./past-adventure-complaint.component.css']
})
export class PastAdventureComplaintComponent implements OnInit {
  reservation: AdventureReservation = new AdventureReservation();
  instructor: FishingInstructor = new FishingInstructor();
  adventureName: string;
  adventureComplaint: AdventureComplaint = new AdventureComplaint();
  instructorComplaint: InstructorComplaint = new InstructorComplaint();
  

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

  leaveComplaint(){
    if(this.adventureComplaint.complaint){
      this.adventureComplaint.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.adventureComplaint.adventureId = this.reservation.adventureId;
      this.adventureService.createAdventureComplaint(this.adventureComplaint).subscribe();
    }
    
    if(this.instructorComplaint.complaint){
      this.instructorComplaint.registeredUserId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.instructorComplaint.fishingInstructorId = this.instructor.id;
      this.adventureService.createInstructorComplaint(this.instructorComplaint).subscribe();
    }
    
  }
}

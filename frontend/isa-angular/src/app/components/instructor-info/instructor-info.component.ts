import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../services/instructor.service';
import { FishingInstructor } from './../../models/fishing-instructor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-info',
  templateUrl: './instructor-info.component.html',
  styleUrls: ['./instructor-info.component.css']
})
export class InstructorInfoComponent implements OnInit {
  instructor: FishingInstructor;

  constructor(private service: InstructorService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getInstructorById(this.activatedRoute.snapshot.paramMap.get('id'))
  }

  private getInstructorById(id: string | null){
    this.service.getInstructorById(id).subscribe(
      data => {
        this.instructor = data;
      }
    );
  }

}

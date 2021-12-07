import { FishingInstructor } from './../../models/fishing-instructor';
import { InstructorService } from './../../services/instructor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  instructors: FishingInstructor[]
  instructor: FishingInstructor
  dataSource!:MatTableDataSource<any>;
  displayedColumns = ['firstName', 'lastName', 'email']

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: InstructorService, private router: Router) { }

  ngOnInit(): void {
    this.getAllInstructors();
  }

  filterData($event: any){
    this.dataSource.filter = $event.target.value;
  }

  private getAllInstructors(){
    this.service.getAllInstructors().subscribe(
      data => {
        this.instructors = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.matSort;
      }
    );
  }
}

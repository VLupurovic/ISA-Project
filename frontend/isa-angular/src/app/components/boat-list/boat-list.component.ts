import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Boat } from 'src/app/models/boat';
import { MatSort } from '@angular/material/sort';
import { BoatService } from 'src/app/services/boat.service';
import { RegisteredUser } from 'src/app/models/registered-user';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})
export class BoatListComponent implements OnInit {

  boats: Boat[]
  boat: Boat
  dataSource!:MatTableDataSource<any>;
  displayedColumns = ['name', 'location', 'averageRating', 'button'] ; 
  x:any = ""
  loggedUser: RegisteredUser = new RegisteredUser();

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: BoatService, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllBoats();
  }

  filterData($event: any){
    this.dataSource.filter = $event.target.value;
  }

  private getAllBoats(){
    this.service.getAllBoats().subscribe(
      data => {
        this.boats = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.matSort;
      }
    );
  }

  subscribeToBoat(boatId: number){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)
    
    this.userService.subscribeToBoat(this.loggedUser.id, boatId).subscribe(data => console.log(data))
  }
}

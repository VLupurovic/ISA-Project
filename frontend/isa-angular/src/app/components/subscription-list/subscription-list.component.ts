import { RegisteredUser } from './../../models/registered-user';
import { Adventure } from './../../models/adventure';
import { UserService } from 'src/app/services/user.service';
import { AdventureService } from './../../services/adventure.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BoatService } from 'src/app/services/boat.service';
import { CabinService } from 'src/app/services/cabin.service';
import { Boat } from 'src/app/models/boat';
import { Cabin } from 'src/app/models/cabin';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {
  displayedColumns = ['name', 'button'];
  dataSource!:MatTableDataSource<any>;
  adventures: boolean = false;
  cabins: boolean = false;
  boats: boolean = false;
  adventuress: Adventure[] = [];
  boatss: Boat[] = [];
  cabinss: Cabin[] = [];
  x:any = "";
  loggedUser: RegisteredUser = new RegisteredUser();

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private adventureService: AdventureService, private boatService: BoatService, private cabinService: CabinService, private userService: UserService) { }

  ngOnInit(): void {
  }

  getUserAdventureSubscriptions(){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)

    this.adventureService.getUserAdventureSubscriptions(this.loggedUser.id).subscribe(data => {
      this.adventuress = data
      this.dataSource = new MatTableDataSource(this.adventuress);
      this.dataSource.sort = this.matSort;
      this.adventures = true;
      this.cabins = false;
      this.boats = false;
    })
  }

  getUserBoatSubscriptions(){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)

    this.boatService.getUserBoatSubscriptions(this.loggedUser.id).subscribe(data => {
      this.boatss = data
      this.dataSource = new MatTableDataSource(this.boatss);
      this.dataSource.sort = this.matSort;
      this.adventures = false;
      this.cabins = false;
      this.boats = true;
    })
  }

  getUserCabinSubscriptions(){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)

    this.cabinService.getUserCabinSubscriptions(this.loggedUser.id).subscribe(data => {
      this.cabinss = data
      this.dataSource = new MatTableDataSource(this.cabinss);
      this.dataSource.sort = this.matSort;
      this.adventures = false;
      this.cabins = true;
      this.boats = false;
    })
  }

  
  unsubscribeFromAdventure(adventureId: number){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)
    
    this.userService.unsubscribeFromAdventure(this.loggedUser.id, adventureId).subscribe(data => console.log(data))
  }

  unsubscribeFromBoat(boatId: number){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)
    
    this.userService.unsubscribeFromBoat(this.loggedUser.id, boatId).subscribe(data => console.log(data))
  }

  unsubscribeFromCabin(cabinId: number){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)
    
    this.userService.unsubscribeFromCabin(this.loggedUser.id, cabinId).subscribe(data => console.log(data))
  }
}

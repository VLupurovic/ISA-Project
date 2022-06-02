import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdventureReservation } from 'src/app/models/adventure-reservation';
import { BoatReservation } from 'src/app/models/boat-reservation';
import { CabinReservation } from 'src/app/models/cabin-reservation';
import { AdventureService } from 'src/app/services/adventure.service';
import { BoatService } from 'src/app/services/boat.service';
import { CabinService } from 'src/app/services/cabin.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-past-reservations-list',
  templateUrl: './past-reservations-list.component.html',
  styleUrls: ['./past-reservations-list.component.css']
})
export class PastReservationsListComponent implements OnInit {
  adventureReservations: AdventureReservation[] = [];
  boatReservations: BoatReservation[] = [];
  cabinReservations: CabinReservation[] = [];
  dataSource!:MatTableDataSource<any>;
  displayedColumns = ['name', 'startTime', 'endTime', 'price', 'buttons1', 'buttons2'];
  adventures: boolean = false;
  cabins: boolean = false;
  boats: boolean = false;

  constructor(private reservationService: ReservationService, private adventureService: AdventureService, private cabinService: CabinService, private boatService: BoatService) { }

  ngOnInit(): void {
  }

  getUserPastAdventureReservations(){
    this.reservationService.getUserPastAdventureReservations(JSON.parse(localStorage.getItem('loggedUser') || "").id).subscribe(
      data => {
        this.adventureReservations = data;
        this.adventureReservations.forEach(res => {
          this.adventureService.getAdventureById(res.adventureId).subscribe(data => { res.adventureName = data.name })
          
        })
        this.dataSource = new MatTableDataSource(this.adventureReservations);
        this.adventures = true;
        this.cabins = false;
        this.boats = false;
      }
    )
  }

  getUserPastBoatReservations(){
    this.reservationService.getUserPastBoatReservations(JSON.parse(localStorage.getItem('loggedUser') || "").id).subscribe(
      data => {
        this.boatReservations = data;
        this.boatReservations.forEach(res => {
          this.boatService.getBoatById(res.boatId).subscribe(data => { res.boatName = data.name })
        })
        this.dataSource = new MatTableDataSource(this.boatReservations);
        this.adventures = false;
        this.cabins = false;
        this.boats = true;
      }
    )
  }

  getUserPastCabinReservations(){
    this.reservationService.getUserPastCabinReservations(JSON.parse(localStorage.getItem('loggedUser') || "").id).subscribe(
      data => {
        this.cabinReservations = data;
        this.cabinReservations.forEach(res => {
          this.cabinService.getCabinById(res.cabinId).subscribe(data => { res.cabinName = data.name })
        })
        this.dataSource = new MatTableDataSource(this.cabinReservations);
        this.adventures = false;
        this.cabins = true;
        this.boats = false;
      }
    )
  }
}

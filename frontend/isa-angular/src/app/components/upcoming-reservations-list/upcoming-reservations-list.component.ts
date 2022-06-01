import { ReservationService } from 'src/app/services/reservation.service';
import { CabinReservation } from 'src/app/models/cabin-reservation';
import { BoatReservation } from 'src/app/models/boat-reservation';
import { AdventureReservation } from 'src/app/models/adventure-reservation';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdventureService } from 'src/app/services/adventure.service';
import { CabinService } from 'src/app/services/cabin.service';
import { BoatService } from 'src/app/services/boat.service';

@Component({
  selector: 'app-upcoming-reservations-list',
  templateUrl: './upcoming-reservations-list.component.html',
  styleUrls: ['./upcoming-reservations-list.component.css']
})
export class UpcomingReservationsListComponent implements OnInit {
  adventureReservations: AdventureReservation[] = [];
  boatReservations: BoatReservation[] = [];
  cabinReservations: CabinReservation[] = [];
  dataSource!:MatTableDataSource<any>;
  displayedColumns = ['name', 'startTime', 'endTime', 'price', 'buttons'];
  adventures: boolean = false;
  cabins: boolean = false;
  boats: boolean = false;

  constructor(private reservationService: ReservationService, private adventureService: AdventureService, private cabinService: CabinService, private boatService: BoatService) { }

  ngOnInit(): void {
  }

  getUserAdventureReservations(){
    this.reservationService.getUserAdventureReservations(JSON.parse(localStorage.getItem('loggedUser') || "").id).subscribe(
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

  getUserBoatReservations(){
    this.reservationService.getUserBoatReservations(JSON.parse(localStorage.getItem('loggedUser') || "").id).subscribe(
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

  getUserCabinReservations(){
    this.reservationService.getUserCabinReservations(JSON.parse(localStorage.getItem('loggedUser') || "").id).subscribe(
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



  cancelAdventureReservation(id: number){
    this.reservationService.cancelAdventureReservation(id).subscribe();
  }

  cancelBoatReservation(id: number){
    this.reservationService.cancelBoatReservation(id).subscribe();
  }

  cancelCabinReservation(id: number){
    this.reservationService.cancelCabinReservation(id).subscribe();
  }
}

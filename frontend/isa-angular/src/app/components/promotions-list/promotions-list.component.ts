import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdventureTerm } from 'src/app/models/adventure-term';
import { BoatTerm } from 'src/app/models/boat-term';
import { CabinTerm } from 'src/app/models/cabin-term';
import { AdventureService } from 'src/app/services/adventure.service';
import { BoatService } from 'src/app/services/boat.service';
import { CabinService } from 'src/app/services/cabin.service';
import { TermsService } from 'src/app/services/terms.service';

@Component({
  selector: 'app-promotions-list',
  templateUrl: './promotions-list.component.html',
  styleUrls: ['./promotions-list.component.css']
})
export class PromotionsListComponent implements OnInit {
  adventurePromos: AdventureTerm[] = [];
  boatPromos: BoatTerm[] = [];
  cabinPromos: CabinTerm[] = [];
  dataSource!:MatTableDataSource<any>;
  displayedColumns = ['name', 'startTime', 'endTime', 'pricePerDay', 'rating', 'discountedPrice'];
  adventures: boolean = false;
  cabins: boolean = false;
  boats: boolean = false;


  constructor(private service: TermsService, private adventureService: AdventureService, private cabinService: CabinService, private boatService: BoatService) { }

  ngOnInit(): void {
  }

  getAdventurePromos(){
    this.service.getAllAdventurePromos().subscribe(
      data => {
        this.adventurePromos = data;
        this.adventurePromos.forEach(promo => {
          this.adventureService.getAdventureById(promo.adventureId).subscribe(data => { promo.name = data.name })
          this.adventureService.getAdventureById(promo.adventureId).subscribe(data => { promo.rating = data.averageRating })
          promo.startTime = promo.startTime.substring(0,10)
          promo.endTime = promo.endTime.substring(0,10)
          
        })
        this.dataSource = new MatTableDataSource(this.adventurePromos);
        this.adventures = true;
        this.cabins = false;
        this.boats = false;
      }
    )
  }

  getCabinPromos(){
    this.service.getAllCabinPromos().subscribe(
      data => {
        this.cabinPromos = data;
        this.cabinPromos.forEach(promo => {
          this.cabinService.getCabinById(promo.cabinId).subscribe(data => { promo.name = data.name })
          this.cabinService.getCabinById(promo.cabinId).subscribe(data => { promo.rating = data.averageRating })
          promo.startTime = promo.startTime.substring(0,10)
          promo.endTime = promo.endTime.substring(0,10)
          
        })
        this.dataSource = new MatTableDataSource(this.cabinPromos);
        this.adventures = false;
        this.cabins = true;
        this.boats = false;
      }
    )
  }

  getBoatPromos(){
    this.service.getAllBoatTerms().subscribe(
      data => {
        this.boatPromos = data;
        this.boatPromos.forEach(promo => {
          this.boatService.getBoatById(promo.boatId).subscribe(data => { promo.name = data.name })
          this.boatService.getBoatById(promo.boatId).subscribe(data => { promo.rating = data.averageRating })
          promo.startTime = promo.startTime.substring(0,10)
          promo.endTime = promo.endTime.substring(0,10)
          
        })
        this.dataSource = new MatTableDataSource(this.boatPromos);
        this.adventures = false;
        this.cabins = false;
        this.boats = true;
      }
    )
  }
}

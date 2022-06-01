import { BoatTerm } from './../../models/boat-term';
import { CabinService } from './../../services/cabin.service';
import { AdventureService } from 'src/app/services/adventure.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdventureTerm } from 'src/app/models/adventure-term';
import { TermsService } from 'src/app/services/terms.service';
import { Adventure } from 'src/app/models/adventure';
import { templateJitUrl } from '@angular/compiler';
import { CabinTerm } from 'src/app/models/cabin-term';
import { Term } from 'src/app/models/term';
import { BoatService } from 'src/app/services/boat.service';

@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.css']
})
export class TermListComponent implements OnInit {
  startTimeDate:Date;
  endTimeDate:Date;
  searchTermDate:Date;
  searchTerm:string;
  nn:string;
  adventureTerms: AdventureTerm[] = [];
  terms: Term[] = [];
  boatTerms: BoatTerm[] = [];
  cabinTerms: CabinTerm[] = [];
  dataSource!:MatTableDataSource<any>;
  adventures: boolean = false;
  cabins: boolean = false;
  boats: boolean = false;
  displayedColumns = ['name', 'startTime', 'endTime', 'pricePerDay', 'rating'];

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: TermsService, private adventureService: AdventureService, private cabinService: CabinService, private boatService: BoatService) { }

  ngOnInit(): void {
  }

  filterData($event: any){
    this.dataSource.filter = $event.target.value; 
  }

  getAdventureTerms(){
    this.service.getAllAdventureTerms().subscribe(
      data => {
        this.adventureTerms = data;
        this.adventureTerms.forEach(term => {
          this.adventureService.getAdventureById(term.adventureId).subscribe(data => { term.name = data.name })
          this.adventureService.getAdventureById(term.adventureId).subscribe(data => { term.rating = data.averageRating })
          term.startTime = term.startTime.substring(0,10)
          term.endTime = term.endTime.substring(0,10)
          
        })
        this.dataSource = new MatTableDataSource(this.adventureTerms);
        this.dataSource.sort = this.matSort;
        this.adventures = true;
        this.cabins = false;
        this.boats = false;
      }
    )
  }

  getCabinTerms(){
    this.service.getAllCabinTerms().subscribe(
      data => {
        this.cabinTerms = data;
        this.cabinTerms.forEach(term => {
          this.cabinService.getCabinById(term.cabinId).subscribe(data => { term.name = data.name })
          this.cabinService.getCabinById(term.cabinId).subscribe(data => { term.rating = data.averageRating })
          term.startTime = term.startTime.substring(0,10)
          term.endTime = term.endTime.substring(0,10)
          
        })
        this.dataSource = new MatTableDataSource(this.cabinTerms);
        this.dataSource.sort = this.matSort;
        this.adventures = false;
        this.cabins = true;
        this.boats = false;
      }
    )
  }

  getBoatTerms(){
    this.service.getAllBoatTerms().subscribe(
      data => {
        this.boatTerms = data;
        this.boatTerms.forEach(term => {
          this.boatService.getBoatById(term.boatId).subscribe(data => { term.name = data.name })
          this.boatService.getBoatById(term.boatId).subscribe(data => { term.rating = data.averageRating })
          term.startTime = term.startTime.substring(0,10)
          term.endTime = term.endTime.substring(0,10)
          
        })
        this.dataSource = new MatTableDataSource(this.boatTerms);
        this.dataSource.sort = this.matSort;
        this.adventures = false;
        this.cabins = false;
        this.boats = true;
      }
    )
  }

  searchByTerm(){
    if(this.adventures == true){
      this.service.getAllAdventureTerms().subscribe(
        data => {
          this.adventureTerms = data;
          this.adventureTerms.forEach(term => {
            this.startTimeDate = new Date(Date.parse(term.startTime))
            this.endTimeDate = new Date(Date.parse(term.endTime))
            this.searchTermDate = new Date(Date.parse(this.searchTerm))
  
            if(this.searchTermDate < this.startTimeDate || this.searchTermDate > this.endTimeDate){
              const index: number = this.adventureTerms.indexOf(term);
              this.adventureTerms.splice(index, 1);
            }
          })
  
          this.adventureTerms.forEach(term => {
            this.adventureService.getAdventureById(term.adventureId).subscribe(data => { term.name = data.name })
            this.adventureService.getAdventureById(term.adventureId).subscribe(data => { term.rating = data.averageRating })
            term.startTime = term.startTime.substring(0,10)
            term.endTime = term.endTime.substring(0,10)
          })
  
          this.dataSource = new MatTableDataSource(this.adventureTerms);
          this.dataSource.sort = this.matSort;
        }
      )
    }
    
    if(this.boats == true){
      this.service.getAllBoatTerms().subscribe(
        data => {
          this.boatTerms = data;
          this.boatTerms.forEach(term => {
            this.startTimeDate = new Date(Date.parse(term.startTime))
            this.endTimeDate = new Date(Date.parse(term.endTime))
            this.searchTermDate = new Date(Date.parse(this.searchTerm))
  
            if(this.searchTermDate < this.startTimeDate || this.searchTermDate > this.endTimeDate){
              const index: number = this.boatTerms.indexOf(term);
              this.boatTerms.splice(index, 1);
            }
          })
  
          this.boatTerms.forEach(term => {
            this.boatService.getBoatById(term.boatId).subscribe(data => { term.name = data.name })
            this.boatService.getBoatById(term.boatId).subscribe(data => { term.rating = data.averageRating })
            term.startTime = term.startTime.substring(0,10)
            term.endTime = term.endTime.substring(0,10)
          })
  
          this.dataSource = new MatTableDataSource(this.boatTerms);
          this.dataSource.sort = this.matSort;
        }
      )
    }

    if(this.cabins == true){
      this.service.getAllCabinTerms().subscribe(
        data => {
          this.cabinTerms = data;
          this.cabinTerms.forEach(term => {
            this.startTimeDate = new Date(Date.parse(term.startTime))
            this.endTimeDate = new Date(Date.parse(term.endTime))
            this.searchTermDate = new Date(Date.parse(this.searchTerm))
  
            if(this.searchTermDate < this.startTimeDate || this.searchTermDate > this.endTimeDate){
              const index: number = this.cabinTerms.indexOf(term);
              this.cabinTerms.splice(index, 1);
            }
          })
  
          this.cabinTerms.forEach(term => {
            this.cabinService.getCabinById(term.cabinId).subscribe(data => { term.name = data.name })
            this.cabinService.getCabinById(term.cabinId).subscribe(data => { term.rating = data.averageRating })
            term.startTime = term.startTime.substring(0,10)
            term.endTime = term.endTime.substring(0,10)
          })
  
          this.dataSource = new MatTableDataSource(this.cabinTerms);
          this.dataSource.sort = this.matSort;
        }
      )
    }
  }
}

import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Boat } from 'src/app/models/boat';
import { MatSort } from '@angular/material/sort';
import { BoatService } from 'src/app/services/boat.service';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})
export class BoatListComponent implements OnInit {

  boats: Boat[]
  boat: Boat
  dataSource!:MatTableDataSource<any>;
  displayedColumns = ['name', 'location', 'description', 'averageRating', 'actions']  

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: BoatService, private router: Router) { }

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

  onClick(boat: Boat){
    this.router.navigate(['/api/boats', boat.id]);
  }

}

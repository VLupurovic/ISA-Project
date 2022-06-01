import { CabinService } from './../../services/cabin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cabin } from 'src/app/models/cabin';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-cabin-list',
  templateUrl: './cabin-list.component.html',
  styleUrls: ['./cabin-list.component.css']
})
export class CabinListComponent implements OnInit {

  cabins: Cabin[]
  dataSource!:MatTableDataSource<any>;
  displayedColumns = ['name', 'address', 'averageRating'];

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: CabinService) { }

  ngOnInit(): void {
    this.getAllCabins();
  }

  filterData($event: any){
    this.dataSource.filter = $event.target.value; 
  }

  private getAllCabins(){
    this.service.getAllCabins().subscribe(
      data => {
        this.cabins = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.matSort;
      }
    );
  }

}

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Adventure } from 'src/app/models/adventure';
import { AdventureService } from 'src/app/services/adventure.service';

@Component({
  selector: 'app-adventure-list',
  templateUrl: './adventure-list.component.html',
  styleUrls: ['./adventure-list.component.css']
})
export class AdventureListComponent implements OnInit {
  adventures: Adventure[];
  dataSource!:MatTableDataSource<any>;
  displayedColumns = ['name', 'address', 'averageRating'];
  
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: AdventureService) { }

  ngOnInit(): void {
    this.getAllAdventures();
  }

  filterData($event: any){
    this.dataSource.filter = $event.target.value; 
  }

  private getAllAdventures(){
    this.service.getAllAdventures().subscribe(
      data => {
        console.log(data);
        this.adventures = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.matSort;
      }
    );
  }
}

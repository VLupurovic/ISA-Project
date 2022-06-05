import { RegisteredUser } from './../../models/registered-user';
import { UserService } from './../../services/user.service';
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
  displayedColumns = ['name', 'address', 'averageRating', 'button'];
  x:any = ""
  loggedUser: RegisteredUser = new RegisteredUser();
  
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: AdventureService, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllAdventures();
  }

  filterData($event: any){
    this.dataSource.filter = $event.target.value; 
  }

  private getAllAdventures(){
    this.service.getAllAdventures().subscribe(
      data => {
        this.adventures = data;
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.matSort;
      }
    );
  }

  subscribeToAdventure(adventureId: number){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)
    
    this.userService.subscribeToAdventure(this.loggedUser.id, adventureId).subscribe(data => console.log(data))
  }
}

import { UserService } from 'src/app/services/user.service';
import { CabinService } from './../../services/cabin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cabin } from 'src/app/models/cabin';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RegisteredUser } from 'src/app/models/registered-user';

@Component({
  selector: 'app-cabin-list',
  templateUrl: './cabin-list.component.html',
  styleUrls: ['./cabin-list.component.css']
})
export class CabinListComponent implements OnInit {

  cabins: Cabin[]
  dataSource!:MatTableDataSource<any>;
  displayedColumns = ['name', 'address', 'averageRating', 'button'];
  x:any = ""
  loggedUser: RegisteredUser = new RegisteredUser();

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private service: CabinService, private userService: UserService) { }

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

  subscribeToCabin(cabinId: number){
    this.x = localStorage.getItem('loggedUser')
    this.loggedUser = JSON.parse(this.x)
    
    this.userService.subscribeToCabin(this.loggedUser.id, cabinId).subscribe(data => console.log(data))
  }
}

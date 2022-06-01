import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoatService } from 'src/app/services/boat.service';
import { Boat } from 'src/app/models/boat';

@Component({
  selector: 'app-boat-info',
  templateUrl: './boat-info.component.html',
  styleUrls: ['./boat-info.component.css']
})
export class BoatInfoComponent implements OnInit{
  boat: Boat;
  constructor(private service: BoatService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBoatById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  private getBoatById(id: number){
    this.service.getBoatById(id).subscribe(
      data => {
        this.boat = data;
      }
    );
  }

}

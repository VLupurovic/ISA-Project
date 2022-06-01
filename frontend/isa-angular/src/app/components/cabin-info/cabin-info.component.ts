import { ActivatedRoute } from '@angular/router';
import { CabinService } from './../../services/cabin.service';
import { Component, OnInit } from '@angular/core';
import { Cabin } from 'src/app/models/cabin';

@Component({
  selector: 'app-cabin-info',
  templateUrl: './cabin-info.component.html',
  styleUrls: ['./cabin-info.component.css']
})
export class CabinInfoComponent implements OnInit {
  cabin: Cabin;

  constructor(private service: CabinService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCabinById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  private getCabinById(id: number){
    this.service.getCabinById(id).subscribe(
      (data:Cabin) => this.cabin = data
    );
  }

}

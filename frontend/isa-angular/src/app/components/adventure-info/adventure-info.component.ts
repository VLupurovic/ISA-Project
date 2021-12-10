import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adventure } from 'src/app/models/adventure';
import { AdventureService } from 'src/app/services/adventure.service';

@Component({
  selector: 'app-adventure-info',
  templateUrl: './adventure-info.component.html',
  styleUrls: ['./adventure-info.component.css']
})
export class AdventureInfoComponent implements OnInit {
  adventure: Adventure;

  constructor(private service: AdventureService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAdventureById(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getAdventureById(id: string | null){
    this.service.getAdventureById(id).subscribe(
      (data:Adventure) => this.adventure = data
    );
  }  
}

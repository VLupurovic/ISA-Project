import { BoatListComponent } from './components/boat-list/boat-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatInfoComponent } from './components/boat-info/boat-info.component';
import { CabinListComponent } from './components/cabin-list/cabin-list.component';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';
import { InstructorInfoComponent } from './components/instructor-info/instructor-info.component';
import { AdventureListComponent } from './components/adventure-list/adventure-list.component';

const routes: Routes = [
  {path: 'boats', component: BoatListComponent},
  {path: 'boats/:id', component: BoatInfoComponent},
  {path: 'cabins', component: CabinListComponent},
  {path: 'instructors', component: InstructorListComponent},
  {path: 'instructors/:id', component: InstructorInfoComponent},
  {path: 'adventures', component: AdventureListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

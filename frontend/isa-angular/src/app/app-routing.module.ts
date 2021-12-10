import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFromComponent } from './components/register-from/register-from.component';
import { BoatListComponent } from './components/boat-list/boat-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoatInfoComponent } from './components/boat-info/boat-info.component';
import { CabinListComponent } from './components/cabin-list/cabin-list.component';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';
import { InstructorInfoComponent } from './components/instructor-info/instructor-info.component';
import { AdventureListComponent } from './components/adventure-list/adventure-list.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CabinInfoComponent } from './components/cabin-info/cabin-info.component';
import { RegisterComponent } from './components/register/register.component';
import { AdventureInfoComponent } from './components/adventure-info/adventure-info.component';

const routes: Routes = [
  {path: 'boats', component: BoatListComponent},
  {path: 'boats/:id', component: BoatInfoComponent},
  {path: 'cabins', component: CabinListComponent},
  {path: 'cabins/:id', component: CabinInfoComponent},
  {path: 'instructors', component: InstructorListComponent},
  {path: 'instructors/:id', component: InstructorInfoComponent},
  {path: 'adventures', component: AdventureListComponent},
  {path: 'adventures/:id', component: AdventureInfoComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

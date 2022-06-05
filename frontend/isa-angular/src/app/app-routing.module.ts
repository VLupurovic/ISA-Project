import { TermListComponent } from './components/term-list/term-list.component';
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
import { AdventureTermInfoComponent } from './components/adventure-term-info/adventure-term-info.component';
import { BoatTermInfoComponent } from './components/boat-term-info/boat-term-info.component';
import { CabinTermInfoComponent } from './components/cabin-term-info/cabin-term-info.component';
import { PromotionsListComponent } from './components/promotions-list/promotions-list.component';
import { UpcomingReservationsListComponent } from './components/upcoming-reservations-list/upcoming-reservations-list.component';
import { PastReservationsListComponent } from './components/past-reservations-list/past-reservations-list.component';
import { PastAdventureReservationInfoComponent } from './components/past-adventure-reservation-info/past-adventure-reservation-info.component';
import { PastBoatReservationInfoComponent } from './components/past-boat-reservation-info/past-boat-reservation-info.component';
import { PastCabinReservationInfoComponent } from './components/past-cabin-reservation-info/past-cabin-reservation-info.component';
import { PastAdventureComplaintComponent } from './components/past-adventure-complaint/past-adventure-complaint.component';
import { PastCabinComplaintComponent } from './components/past-cabin-complaint/past-cabin-complaint.component';
import { PastBoatComplaintComponent } from './components/past-boat-complaint/past-boat-complaint.component';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';

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
  {path: 'dashboard', component: DashboardComponent},
  {path: 'terms', component: TermListComponent},
  {path: 'adventure-terms/:id', component: AdventureTermInfoComponent},
  {path: 'boat-terms/:id', component: BoatTermInfoComponent},
  {path: 'cabin-terms/:id', component: CabinTermInfoComponent},
  {path: 'promotions', component: PromotionsListComponent},
  {path: 'upcoming-reservations', component: UpcomingReservationsListComponent},
  {path: 'past-reservations', component: PastReservationsListComponent},
  {path: 'past-adventure-reservation/:id', component: PastAdventureReservationInfoComponent},
  {path: 'past-boat-reservation/:id', component: PastBoatReservationInfoComponent},
  {path: 'past-cabin-reservation/:id', component: PastCabinReservationInfoComponent},
  {path: 'past-adventure-complaint/:id', component: PastAdventureComplaintComponent},
  {path: 'past-cabin-complaint/:id', component: PastCabinComplaintComponent},
  {path: 'past-boat-complaint/:id', component: PastBoatComplaintComponent},
  {path: 'subscription-list', component: SubscriptionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

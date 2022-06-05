import { ConfirmEqualValidatorDirective } from './components/register-from/confirm-equal-validator.directive';
import { ValidateEqualModule } from 'ng-validate-equal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabinListComponent } from './components/cabin-list/cabin-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BoatListComponent } from './components/boat-list/boat-list.component';
import { BoatInfoComponent } from './components/boat-info/boat-info.component';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';
import { InstructorInfoComponent } from './components/instructor-info/instructor-info.component';
import { AdventureListComponent } from './components/adventure-list/adventure-list.component';
import { RegisterFromComponent } from './components/register-from/register-from.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CabinInfoComponent } from './components/cabin-info/cabin-info.component';
import { RegisterComponent } from './components/register/register.component';
import { AdventureInfoComponent } from './components/adventure-info/adventure-info.component';
import { TermListComponent } from './components/term-list/term-list.component';
import { MatSelectModule } from '@angular/material/select';
import { TermInfoComponent } from './components/term-info/term-info.component';
import { AdventureTermInfoComponent } from './components/adventure-term-info/adventure-term-info.component';
import { BoatTermInfoComponent } from './components/boat-term-info/boat-term-info.component';
import { CabinTermInfoComponent } from './components/cabin-term-info/cabin-term-info.component';
import { PromotionsListComponent } from './components/promotions-list/promotions-list.component';
import { UpcomingReservationsListComponent } from './components/upcoming-reservations-list/upcoming-reservations-list.component';
import { PastReservationsListComponent } from './components/past-reservations-list/past-reservations-list.component';
import { PastReservationInfoComponent } from './components/past-reservation-info/past-reservation-info.component';
import { PastAdventureReservationInfoComponent } from './components/past-adventure-reservation-info/past-adventure-reservation-info.component';
import { PastBoatReservationInfoComponent } from './components/past-boat-reservation-info/past-boat-reservation-info.component';
import { PastCabinReservationInfoComponent } from './components/past-cabin-reservation-info/past-cabin-reservation-info.component';
import { PastAdventureComplaintComponent } from './components/past-adventure-complaint/past-adventure-complaint.component';
import { PastCabinComplaintComponent } from './components/past-cabin-complaint/past-cabin-complaint.component';
import { PastBoatComplaintComponent } from './components/past-boat-complaint/past-boat-complaint.component';
import { SubscriptionListComponent } from './components/subscription-list/subscription-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CabinListComponent,
    BoatListComponent,
    BoatInfoComponent,
    InstructorListComponent,
    InstructorInfoComponent,
    AdventureListComponent,
    RegisterFromComponent,
    ConfirmationComponent,
    LoginFormComponent,
    ProfileComponent,
    NavbarComponent,
    DashboardComponent,
    ConfirmEqualValidatorDirective,
    CabinInfoComponent,
    RegisterComponent,
    AdventureInfoComponent,
    TermListComponent,
    TermInfoComponent,
    AdventureTermInfoComponent,
    BoatTermInfoComponent,
    CabinTermInfoComponent,
    PromotionsListComponent,
    UpcomingReservationsListComponent,
    PastReservationsListComponent,
    PastReservationInfoComponent,
    PastAdventureReservationInfoComponent,
    PastBoatReservationInfoComponent,
    PastCabinReservationInfoComponent,
    PastAdventureComplaintComponent,
    PastCabinComplaintComponent,
    PastBoatComplaintComponent,
    SubscriptionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ValidateEqualModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    ConfirmEqualValidatorDirective
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
    ValidateEqualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

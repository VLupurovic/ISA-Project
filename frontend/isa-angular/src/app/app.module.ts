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


@NgModule({
  declarations: [
    AppComponent,
    CabinListComponent,
    BoatListComponent,
    BoatInfoComponent,
    InstructorListComponent,
    InstructorInfoComponent,
    AdventureListComponent
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

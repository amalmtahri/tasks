import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

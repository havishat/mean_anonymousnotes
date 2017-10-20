import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'; // <— Import
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoteserviceService } from './noteservice.service';
import { CreatnoteComponent } from './creatnote/creatnote.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CreatnoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [NoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from './../noteservice.service';

@Component({
  selector: 'app-creatnote',
  templateUrl: './creatnote.component.html',
  styleUrls: ['./creatnote.component.css']
})
export class CreatnoteComponent implements OnInit {

  noteobject = {
    note: '',
  }
  updatednotes;

  constructor(private _noteserviceService: NoteserviceService) { 
    this._noteserviceService.retrieveAll((stuff) => {
      this.updatednotes = stuff;
      console.log("1",this.updatednotes)
    })
  }

   onSubmit() {
    this._noteserviceService.createNote(this.noteobject, (hi) => {
      this._noteserviceService.retrieveAll((a) => {
        console.log("will this work??")
        this.updatednotes = a;
        console.log("2",this.updatednotes)
        
      })
    })
    
  }

  ngOnInit() {

  }

}

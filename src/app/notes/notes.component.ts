import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NoteResponse} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {NotesServiceService} from "../services/notes-service.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: NoteResponse[] = [];

  constructor(
    private http: HttpClient,
    private notesService: NotesServiceService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.notesService.getNotes()
      .subscribe(notes => {
        this.notes = notes as NoteResponse[]
      });
  }

}

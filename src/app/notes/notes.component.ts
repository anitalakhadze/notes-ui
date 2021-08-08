import { Component, OnInit } from '@angular/core';
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
  selectedNote?: NoteResponse;

  constructor(
    private http: HttpClient,
    private notesService: NotesServiceService
  ) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.notesService.getNotes()
      .subscribe(notes => {
        this.notes = notes
      });
  }

  onSelect(note: NoteResponse): void {
    this.selectedNote = note;
  }

}

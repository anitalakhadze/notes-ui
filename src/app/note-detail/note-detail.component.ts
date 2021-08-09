import { Component, OnInit, Input } from '@angular/core';
import { NoteResponse } from "../interfaces";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {NotesServiceService} from "../services/notes-service.service";

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  @Input() note?: NoteResponse;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private notesService: NotesServiceService
  ) { }

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.notesService.getNote(id)
      .subscribe(note => this.note = note);
  }

  goBack(): void {
    this.location.back();
  }

}

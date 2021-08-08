import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {NoteResponse} from "../interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  private notesEndpoint: string = "http://localhost:9091/notes"

  constructor(
    private http: HttpClient
  ) { }

  getNotes(): Observable<NoteResponse[]> {
    return this.http.get<NoteResponse[]>(this.notesEndpoint);
  }

  getNote(id: number): Observable<NoteResponse> {
    return this.http.get<NoteResponse>(this.notesEndpoint.concat(`/${id}`));
  }
}

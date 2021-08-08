export interface NoteRequest {
  subject: string,
  text: string,
  authorId: number,
  createdAt: string
}

export interface NoteResponse {
  id: number,
  subject: string,
  text: string,
  authorUsername: string,
  createdAt: string
}

export interface AuthorRequest {
  username: string
}

export interface AuthorResponse {
  id: number,
  username: string
}

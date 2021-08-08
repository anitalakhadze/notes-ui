export interface NoteRequest {
  subject: string,
  text: string,
  authorId: number,
  createdAt: string
}

export interface AuthorRequest {
  username: string
}

export interface NoteResponse {
  id: number,
  subject: string,
  text: string,
  authorUsername: string,
  createdAt: string
}

export interface AuthorRespones {
  id: number,
  username: string
}

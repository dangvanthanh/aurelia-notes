import uuidv4 from 'uuid/v4';
import { Note } from './note';

export class App {
  notes: Note[] = [];
  selectedNoteId = -1;
  selectedNoteElement = null;
  searchNoteText = '';

  createNote() {
    const id = uuidv4();
    const body = '';
    const timestamp = new Date().getTime();

    let note = new Note(id, body, timestamp);
    this.notes.push(note);
    this.selectedNoteId = id;
    this.selectedNoteElement = this.getSelectedNote(
      this.notes,
      this.selectedNoteId
    );
  }

  deleteNote() {
    if (this.selectedNoteId !== -1) {
      const index = this.notes.findIndex(
        note => note.id === this.selectedNoteId
      );

      if (index > -1) {
        this.notes.splice(index, 1);
        this.selectedNoteElement = null;
      }
    }
  }

  selectedNote(id) {
    this.selectedNoteId = id;
    this.selectedNoteElement = this.getSelectedNote(
      this.notes,
      this.selectedNoteId
    );
  }

  getSelectedNote(notes, id) {
    return notes.filter(note => note.id === id)[0];
  }
}

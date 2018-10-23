import { computedFrom } from 'aurelia-framework';
import uuidv4 from 'uuid/v4';
import { Note } from './note';

export class App {
  notes: Note[] = [];
  selectedNote = null;
  searchNoteText = '';

  @computedFrom('notes')
  get transformNotes(): Note[] {
    return this.notes.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  }

  createNote() {
    const id = uuidv4();
    const body = '';
    const timestamp = Date.now();
    let newNote = new Note(id, body, timestamp);
    this.notes.push(newNote);
    this.selectedNote = newNote;
  }

  deleteNote() {
    const index = this.notes.findIndex(
      note => note.id === this.selectedNote.id
    );
    if (index > -1) {
      this.notes.splice(index, 1);
      this.selectedNote = null;
    }
  }

  selectNote(note) {
    this.selectedNote = note;
  }
}

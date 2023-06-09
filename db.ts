import Dexie, { Table } from 'dexie';
import { INote } from './src/types/types'


export class NotesApp extends Dexie {
  notes!: Table<INote>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      notes: '++id, name, created, content'
    });
  }
}

export const db = new NotesApp();

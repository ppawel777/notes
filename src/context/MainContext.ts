import { createContext } from 'react';
import { INote } from '../types/types'

type Context = {
  noteList: INote[],
  noteId: number,
  setNoteId:(c:number) => void
} 
export const MainContext = createContext<Context>({
  noteList: [],
  noteId: 0,
  setNoteId: () => 0
});

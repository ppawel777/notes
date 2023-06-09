import { useContext, useState, useCallback, useMemo, useEffect } from 'react'
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import useDebounce from '../../hooks/useDebounce'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Markdown from 'marked-react';
import { MainContext } from '../../context/MainContext'
import { db } from '../../../db'
import moment from 'moment';
import './index.scss'

const { notes } = db

const NoteWorkspace = () => {
  const { noteList, noteId } = useContext(MainContext);
  const current_note = noteList.find(f => f.id === noteId) || null
  const [value, setValue] = useState<string>("Initial");
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false)

  const updateDB = async (value: any) => await notes.update(noteId, { content: value })
  const debounceUpdate = useDebounce(updateDB, 500)

  useEffect(() => {
    current_note && setValue(current_note.content)
  },[current_note])

  const onChange = useCallback(async (value: string) => {
    setValue(value);
    debounceUpdate(value)
  }, [debounceUpdate]);

  const handleClickMarkdown = () => setVisibleEdit(true)

  const onClickOutsideListener = () => {
    setVisibleEdit(false)
    document.removeEventListener("click", onClickOutsideListener)
  }

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      toolbar: false,
      status: false,
      styleSelectedText: false,
      maxHeight: "calc(100vh - 88px)",
    }
  }, []);
  
  if (current_note) {
    return (
      <div className='workspace_content'>
        <span className='workspace_content__date'>
          { moment(current_note.created).format('DD.MM.YYYY HH:mm') }
        </span>
        <p className='workspace_content__title'>{ current_note.name }</p>
        {
          visibleEdit ?
          <SimpleMdeReact
            className='workspace_content__editor'
            options={autofocusNoSpellcheckerOptions}
            value={value}
            onChange={onChange}
            onMouseLeave={() => {
              document.addEventListener("click", onClickOutsideListener)
            }}
          />
          :
          <div onClick={handleClickMarkdown}>
            <Markdown 
              value={((/\W/.test(value) || value.length === 0)) ? 'Нажмите для ввода текста' : value} 
            />
          </div>
        }
      </div>
    )
  }
  return <div></div>
}

export default NoteWorkspace;

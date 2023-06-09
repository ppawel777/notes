import React, { useState, useCallback, useEffect, useContext } from 'react'
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import ControlPanel from './ControlPanel';
import { INote } from '../../types/types'
import moment from 'moment';
import { MainContext } from '../../context/MainContext' 

import './index.scss'


const NoteListTable = () => {
  const [dataTable, setDataTable] = useState<INote[]>([])
  const [searchValue, setSearchValue] = useState('')
  const { noteList, noteId, setNoteId } = useContext(MainContext);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (noteList.length) {
      const value = e.target.value.toLowerCase()
      if (value === '') setDataTable(noteList)
      setSearchValue(value)
      const filters = noteList.filter(f => {
        const name = f.name.toLowerCase()
        const content = f.content.toLowerCase()
        return name.includes(value) || content.includes(value)
      })
      setDataTable(filters)
    }
  }, [dataTable.length])

  useEffect(() => {
    noteList && setDataTable(noteList)
    !noteList?.length && (noteId > 0 && setNoteId(0))
 }, [noteList])

 const truncateString = (s: string, w: number) => s.length > w ? s.substring(0, w).trim() + "..." : s;

  const columns = [
    {
      title: <Input
        placeholder='Поиск'
        prefix={<SearchOutlined />}
        value={ searchValue }
        onChange={ handleSearch }
        bordered={false}>
       </Input>,
       dataIndex: 'name',
       render: (_: any, rows: INote) => {
        return (
          <div className='note-list_rows'>
            <span className='note-list_rows__name'>{ rows.name }</span>
            <span className='note-list_rows__date'>
              { moment(rows.created).format('DD.MM.YYYY') }
              <span className='note-list_rows__content'>
                { truncateString(rows.content, 40) }
              </span>
            </span>
            
          </div>
        )
       }
    }
  ]

  const setRowClassName = (record: INote) => {
    return record.id === noteId ? 'note-list_rows__selected' : 'note-list_rows__leaf'
  }

  const selectRow = (record: INote) => {
    return {
      onClick: () => {
        noteId !== record.id && setNoteId(+record.id)
      }
    }
  }

  return (
    <div className='note-list'>
      <ControlPanel />
      <Table
        size="small"
        className='note-list_table'
        rowKey={ record => record.id }
        columns={ columns }
        pagination={false}
        scroll={{ y: 'calc(100vh - 94px)' }}
        dataSource={ dataTable }
        onRow={ selectRow }
        rowClassName={ setRowClassName }
      />
    </div>
  )
}

export default NoteListTable;

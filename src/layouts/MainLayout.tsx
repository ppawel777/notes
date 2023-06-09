import { useState } from 'react';
import { Layout } from 'antd';
import { useLiveQuery } from 'dexie-react-hooks';

import NoteListTable from '../components/NoteList/List';
import NoteWorkspace from '../components/NoteWorkspace/Workspace';
import { MainContext } from '../context/MainContext' 
import { db } from '../../db'

import './layout.scss';

const { notes } = db
const { Content, Sider } = Layout

const MainLayout = () => {
  const [noteId, setNoteId] = useState<number>(0);
  const noteList = useLiveQuery(() => notes.toArray(), [notes]) || [];

  return (
    <Layout className='container'>
      <MainContext.Provider value={{ noteList, noteId, setNoteId }}>
        <Sider width={400} className='sider_wrap'>
          <NoteListTable />
        </Sider>
        <Layout>
          <Content className='container_wrap'>
            <NoteWorkspace />
          </Content>
        </Layout>
      </MainContext.Provider>
    </Layout>
  )
}

export default MainLayout;

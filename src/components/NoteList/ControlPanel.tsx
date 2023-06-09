/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Avatar, Modal, Input, Dropdown } from 'antd';
import { DeleteOutlined, FormOutlined, PlusOutlined, UserOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { db } from '../../../db'
import moment from 'moment';
import { MainContext } from '../../context/MainContext'
import { useAuth } from "../../context/AuthProvider"

const { notes } = db
const { confirm } = Modal;

const ControlPanel = () => {
  const [visible, setVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const context_items = useContext(MainContext);
  const { noteList, noteId, setNoteId } = context_items;
  const current_note = noteList.find(f => f.id === noteId) || null

  const auth = useAuth();
  const navigate = useNavigate()

  const handleAddNote = async () => {
    const new_id = await notes.add({
      id: Math.random(),
      name: 'Новая заметка',
      created: moment().format(),
      content: ''
    })
    typeof new_id === 'number' && setNoteId(new_id)
  }

  const handleDeleteNote = () => {
    const deleteFunc = async () => await notes.delete(noteId)
    confirm({
      title: `Вы действительно хотите удалить ${current_note && current_note.name}?`,
      'width': 400,
      'icon': <ExclamationCircleOutlined />,
      'cancelText': 'Нет',
      'okText': 'Да',
      'onOk'() {
        deleteFunc()
        setNoteId(0)
      }
    })
  }

  const openModal = () => {
    current_note && setInputValue(current_note.name)
    setVisible(true);
  }
  const closeModal = () => setVisible(false);
  const handleEditNoteName = () => openModal();
  
  const handleSubmit = async () => {
    //@ts-ignore
    await notes.update(noteId, { name: inputValue })
    closeModal();
  }

  const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value)
  }

  const ModalEdit = () => {
    return (
      <Modal
        open={ visible }
        onOk={ handleSubmit }
        onCancel={ closeModal }
        okButtonProps={{ disabled: !inputValue }}
        okText="Сохранить"
        cancelText="Отмена"
        title={ <span className='note-list_modal__title'>Переименовать заметку</span> }
      >
        <div className='note-list_modal'>
          <div className='note-list_modal__el'>
            <span className='note-list_modal__el-key'>Имя:</span>
          </div>
          <div className='note-list_modal__el'>
            <Input
              allowClear
              value={ inputValue }
              onChange={ handleChangeName }
            />
          </div>
        </div>
      </Modal>
    )
  }
  //@ts-ignore
  const handleSignOut = () => auth.signout(() => {
    navigate('/');
  });

  const items: MenuProps['items'] = [
    {
      key: '1',
      //@ts-ignore
      label: auth.user,
      disabled: true
    },
    {
      key: '2',
      label: (
        <span onClick={handleSignOut}>Выйти</span>
      ),
    }
  ];

  return (
    <div className='note-list_control-wrap'>
      <div>
        <Button
          type="link"
          onClick={ handleAddNote }
          className='note-list_button'
          title='Добавить заметку'
        >
          <PlusOutlined />
        </Button>
        <Button
          type="link"
          disabled={ noteId > 0 ? false : true }
          onClick={ handleEditNoteName }
          className='note-list_button'
          title='Редактирование имени заметки'
        >
          <FormOutlined />
        </Button>
        <Button
          danger
          type="link"
          onClick={ handleDeleteNote }
          disabled={ noteId > 0 ? false : true }
          className='note-list_button'
          title='Удалить заметку'
        >
          <DeleteOutlined />
        </Button>
      </div>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Avatar size={30} icon={<UserOutlined />} />
      </Dropdown>
      { visible && ModalEdit() }
    </div>
  )
}

export default ControlPanel;

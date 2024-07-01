import React from 'react'
import '../dashboard.css'
import NewChatButton from './NewChatButton'
import ListItem from './ListItem'
import DeleteConversationsButton from './DeleteConversationsButton'
import { useDispatch } from 'react-redux'
import { setSelectedConversationId } from '../../store/slices/conversationSlice'

function Sidebar() {
  const dispatch = useDispatch();

  const hadleSetSelectesChat = (id) => {
    dispatch(setSelectedConversationId(id));
  }

  return (
    <div className='sidebar_container'>
        <NewChatButton hadleSetSelectesChat={hadleSetSelectesChat}/>
        <DeleteConversationsButton />
    </div>
  )
}

export default Sidebar
import React from 'react'
import { useSelector } from 'react-redux'
import Messages from './Messages'
import NewMassageInput from './NewMassageInput'

const ChatLogo = () => {
  return (
    <div className='chat_gpt_logo_container'>
      <p className='chat_gpt_logo'>ChatGPT</p>
    </div>
  )
}

const Chat = () => {
  const selectedConversationId = useSelector(state => state.dashboard.selectedConversationId)
  return (
    <div className='chat_container'>
      <div className='chat_selected_container'>
        {/* <ChatLogo /> */}
        <Messages />
        <NewMassageInput />
      </div>
    </div>
  )
}

export default Chat
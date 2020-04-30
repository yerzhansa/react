import React, { useEffect, useState } from 'react'
import { ChatList } from '../ChatList'
import { MessageList } from '../MessageList'
import chats from '../../mocks/chat/chatList.json'
import allMessages from '../../mocks/chat/messageList.json'
import { IMessage } from '../MessageItem/types'
import s from './styles.module.css'

export const Chat = () => {
  const [selectedChatId, setSelectedChatId] = useState<number>()
  const [chatMessages, setChatMessages] = useState<IMessage[]>([])

  useEffect(() => {
    const m = allMessages.find(({ chatId }) => selectedChatId === chatId)
    if (m) setChatMessages(m.messages)
  }, [selectedChatId])

  const handleClickOnChat = (id: number) => () => {
    setSelectedChatId(id)
  }

  return (
    <div className={s.root}>
      <ChatList
        handleClickOnChat={handleClickOnChat}
        selectedChatId={selectedChatId}
        chats={chats}
      />
      <MessageList messages={chatMessages} />
    </div>
  )
}

import React from 'react'
import { Props } from './types'
import s from './styles.module.css'
import { ChatItem } from '../ChatItem'
import { IChat } from '../ChatItem/types'

export const ChatList: Props = ({
  chats,
  handleClickOnChat,
  selectedChatId,
}) => {
  const compareFn = (a: IChat, b: IChat) => {
    const timeA = new Date(a.lastMessageDate).getTime()
    const timeB = new Date(b.lastMessageDate).getTime()
    return timeB - timeA
  }

  const mapChats = ({
    id,
    name,
    imageLink,
    lastMessage,
    lastMessageAuthor,
    lastMessageDate,
  }: IChat) => (
    <ChatItem
      key={id}
      selectedChatId={selectedChatId}
      handleClickOnChat={handleClickOnChat}
      {...{
        id,
        name,
        imageLink,
        lastMessage,
        lastMessageAuthor,
        lastMessageDate,
      }}
    />
  )

  return <ul className={s.list}>{chats.sort(compareFn).map(mapChats)}</ul>
}

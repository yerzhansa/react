import React from 'react'
import s from './styles.module.css'
import { Props } from './types'
import { Avatar } from '../Avatar'

export const ChatItem: Props = ({
  id,
  name,
  imageLink,
  lastMessageDate,
  lastMessageAuthor,
  lastMessage,
  handleClickOnChat,
  isChatSelected,
}) => (
  <div
    onClick={handleClickOnChat(id)}
    className={`${s.item} ${isChatSelected ? `${s.selected}` : ''}`}
  >
    <Avatar imageLink={imageLink} alt={name} />
    <div className={s.content}>
      <div className={s.meta}>
        <div className={s.name}>{name}</div>
        <div className={s.date}>
          {new Date(lastMessageDate).toLocaleDateString()}
        </div>
      </div>
      <div className={s.message}>
        <div className={s.author}>{lastMessageAuthor}:</div>
        <div>{lastMessage}</div>
      </div>
    </div>
  </div>
)

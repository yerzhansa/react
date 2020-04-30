import React from 'react'
import { Props } from './types'
import s from './styles.module.css'
import { Avatar } from '../Avatar'

export const MessageItem: Props = ({ userName, userAvatar, date, message }) => {
  return (
    <li className={s.item}>
      <Avatar imageLink={userAvatar} alt={userName} />
      <div className={s.content}>
        <div className={s.meta}>
          <div className={s.name}>{userName}</div>
          <div className={s.date}>{new Date(date).toLocaleTimeString()}</div>
        </div>
        <div className={s.message}>
          <div>{message}</div>
        </div>
      </div>
    </li>
  )
}

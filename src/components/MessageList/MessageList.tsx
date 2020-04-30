import React from 'react'
import { Props } from './types'
import { MessageItem } from '../MessageItem'

export const MessageList: Props = ({ messages }) => {
  return (
    <ul>
      {messages.length > 0 ? (
        messages.map(({ id, userName, userAvatar, message, date }) => (
          <MessageItem
            key={id}
            id={id}
            userName={userName}
            userAvatar={userAvatar}
            message={message}
            date={date}
          />
        ))
      ) : (
        <h2>Select a chat to start messaging</h2>
      )}
    </ul>
  )
}

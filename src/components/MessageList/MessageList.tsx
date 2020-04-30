import React from 'react'
import { Props } from './types'
import { MessageItem } from '../MessageItem'

export const MessageList: Props = ({ messages }) => {
  return (
    <>
      {messages.length > 0 ? (
        <ul>
          {messages.map(({ id, userName, userAvatar, message, date }) => (
            <li key={id}>
              <MessageItem
                id={id}
                userName={userName}
                userAvatar={userAvatar}
                message={message}
                date={date}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2>Select a chat to start messaging</h2>
      )}
    </>
  )
}

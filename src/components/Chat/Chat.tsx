import React, { useEffect, useState, Component } from 'react'
import { ChatList } from '../ChatList'
import { MessageList } from '../MessageList'
import chats from '../../mocks/chat/chatList.json'
import allMessages from '../../mocks/chat/messageList.json'
import { IMessage } from '../MessageItem/types'
import s from './styles.module.css'

interface Props {} // TODO move to types.ts

interface State {
  // TODO move to types.ts
  selectedChatId?: number
  chatMessages: IMessage[]
}

export class Chat extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { chatMessages: [] }
  }

  handleClickCreator = (id: number) => {
    return () => {
      const m = allMessages.find(({ chatId }) => id === chatId)
      if (m) this.setState({ chatMessages: m.messages, selectedChatId: id })
    }
  }

  render(): React.ReactNode {
    const { selectedChatId, chatMessages } = this.state

    return (
      <div className={s.root}>
        <ChatList
          handleClickOnChat={this.handleClickCreator}
          selectedChatId={selectedChatId}
          chats={chats}
        />
        <MessageList messages={chatMessages} />
      </div>
    )
  }
}

import { FC } from 'react'

export interface IChat {
  id: number
  name: string
  lastMessageDate: string
  lastMessageAuthor: string
  lastMessage: string
  imageLink: string
}

interface OwnProps {
  handleClickOnChat: (id: number) => () => void
  isChatSelected?: boolean
}

export type Props = FC<IChat & OwnProps>

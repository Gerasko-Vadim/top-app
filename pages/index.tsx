import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Button, Htag, P, Rating, Tag } from '../components'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3)
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primaty" arrow="down">Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
      <P size="l">Большой</P>
      <P >Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s" color="red"> Red</Tag>
      <Tag size="m" color="green"> Red</Tag>
      <Tag size="s" color="primary"> Red</Tag>
      <Tag size="m" color="ghost"> Red</Tag>
      <Tag size="m" color="grey"> Red</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Rating rating={4} isEditable={false} />
    </>
  )
}

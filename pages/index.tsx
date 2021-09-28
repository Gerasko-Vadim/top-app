import Head from 'next/head'
import Image from 'next/image'
import { Button, Htag, P } from '../components'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primaty" arrow="down">Кнопка</Button>
      <Button appearance="ghost" arrow="right">Кнопка</Button>
      <P size="l">Большой</P>
      <P >Средний</P>
      <P size="s">Маленький</P>
    </>
  )
}

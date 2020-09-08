import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainFrame from '../Components/MainFrame'
import Link from 'next/link'
import { Button } from '@material-ui/core'
import { GiWhiteCat } from 'react-icons/gi'

export default function Home() {
  return (
    
    <MainFrame title='Landing Page'>
      <h1>Welcome to Groupware</h1>
      <Link href='/posts/CatList'>
      <a><GiWhiteCat/></a>
          </Link>
    </MainFrame>
    
  )
}

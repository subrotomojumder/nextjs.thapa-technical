import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="next js tu" />
        <meta name="keywords" content="HTML, CSS, Javascript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className='main-container'>
        <div>
          <Navbar></Navbar>
          <div>

          </div>
          <h1>Hello World</h1>
        </div>
      </header>

    </>
  )
}

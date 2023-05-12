import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Navbar } from '../ui/Navbar';

interface Props {
    children: ReactNode
}

export const Layout:FC<Props> = ({ children }) => {
  return (
    <>
        <Head>

        </Head>
        <nav>
          <Navbar/>
        </nav>
        <main style={{ padding: '20px 50px' }}>
            { children }
        </main>
    </>
  )
}

import Head from 'next/head'
import { Header } from '../components/Header'
import { Search } from '../components/Search'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tabela Fipe</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />
      <Search />
    </>
  )
}

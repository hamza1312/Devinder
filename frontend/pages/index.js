import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Devinder | Home Page</title>
        <meta name="description" content="Devinder a dating app for Devs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>Hello world!</h1>
      </main>

      <footer>
        <p>Made By Hamza</p>
      </footer>
    </div>
  )
}

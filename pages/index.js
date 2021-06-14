import Head from 'next/head'
import HomeComponent from '../components/Home'

export default function Home() {
  return (
    <div className="Home">
      <Head>
      <title>Mike Mueller</title>
      </Head>
        <HomeComponent />
    </div>
  )
}

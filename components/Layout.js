import NavBar from './NavBar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <Head>
        <title>Homepage</title>
        <meta name="personal-website" content="By Jacob Im" />
        <link rel="icon" href="/headshot.png" />
      </Head>
      {children}
      <Footer />
    </div>
  )
}
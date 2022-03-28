import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'


const Nav = styled.nav`
  height: 80px;
  width: 100vw;
  background: none;
  display: flex;
  justify-content: space-around;
  padding: 3rem 10rem;
`


function NavBar () {
  return (
    <div className={styles.title}>
      <Head>
        <title>Jacob Im</title>
        <meta name="personal-website" content="By Jacob Im" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav>
        <a id="about" href="/#about">
          About Me  
        </a>
        <a id="experience" href="/experience#experience">
          Experience  
        </a>
        <a id="projects" href="/projects#projects">
          Projects
        </a>
        <a id="contact" href="/contact#contact">
          Contact Me
        </a>
      </Nav>
    </div>
  )
}

export default NavBar
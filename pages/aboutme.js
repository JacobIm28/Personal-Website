import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function Me({ program, data }) {
  const router = useRouter()
  const {id} = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <meta name="personal-website" content="By Jacob Im" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My name is <span styles={{backgroundColor:'blue'}}>Jacob Im</span>
        </h1>
        <p className={styles.description}>
          I go to the {data.heka.position}
        </p>

        <p>
          I am in {program}
        </p>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      
      
    </div>
  )
}


// export async function getStaticProps() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json'
//     }
//   }

//   const req = await fetch("http://localhost:3000/experience.json", options)
//   const data = await req.json()
//   return {
//     props: {
//       data: data
//     }
//   }
// }

// export async function getStaticProps() {
//   const req = await fetch("http://localhost:3000/education.json")
//   const data = req.json()

//   return {
//     props: {
//       program: "Computer Science",
//       data: data
//     }
//   }
// }


export default Me
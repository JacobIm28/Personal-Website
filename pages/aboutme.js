import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

function Me({ program, data }) {
  const router = useRouter()
  const {id} = router.query

  debugger
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          My name is <span styles={{backgroundColor:'blue'}}>Jacob Im</span>
        </h1>
        
        
      </main>
      
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
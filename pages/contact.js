import styles from '../styles/Home.module.css'
import Card from '../components/Card'

export default function contact({ socials }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.pagetitle}>Connect with me!</h1>
        <div className={styles.grid}>
          <Card media={socials.github} />
          <Card media={socials.linkedin} />
          <Card media={socials.gmail} />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  }

  const req = await fetch("http://localhost:3000/socials.json", options)
  const data = await req.json()

  return {
    props: {
      socials: data
    }
  }
}

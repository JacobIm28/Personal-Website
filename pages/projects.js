import styles from '../styles/Home.module.css'

export default function projects({ projects }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.pagetitle}>Here are some of the projects I've been working on...</h1>
        {
          projects.map((project) => {
            
          })
        }  
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

  const req = await fetch("http://localhost:3000/projects.json", options)
  const data = await req.json()

  return {
    props: {
      projects: data
    }
  }
}

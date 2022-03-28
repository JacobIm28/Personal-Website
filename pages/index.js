import styles from '../styles/Home.module.css'

export default function Home({ socials }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.medium}>Hi I'm</div>
          <span className={styles.emphasize2}>Jacob Im</span>
          <div className={styles.medium}>
            I'm an aspiring software engineer studying Computer Science
            at the University of Waterloo.
          </div> 
        </div>
        <div className={styles.link} >
          <a href={"Resume-JacobIm-I.pdf"} target="_blank">
            Resume
          </a>
        </div>
        <div className={styles.links}>
          <div>
            <a href={socials.github.link} target="_blank">
              <img src={socials.github.icon} alt="/" height="40px"/>
            </a>
            <a href={socials.linkedin.link} target="_blank">
              <img src={socials.linkedin.icon} alt="/" />
            </a>
            <a href={socials.gmail.link} target="_blank">
              <img src={socials.gmail.icon} alt="/" />
            </a>
          </div>
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

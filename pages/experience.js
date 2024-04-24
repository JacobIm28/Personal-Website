import styles from '../styles/Home.module.css'

export default function experience() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.pagetitle}>Experience</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.emphasize}>
              Heka Health
            </div>
            Full Stack Developer
          </div>
          <div className={styles.card}>
            <div className={styles.emphasize}>
              UW MathSoc
            </div>
            Web Developer
          </div>
        </div>
        
      </main>
    </div>
  )
}

import styles from '../styles/Home.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/jacob-im/"
        target="_blank"
      >
        Developed by{' '}
        <span className={styles.emphasize}>
          Jacob Im
        </span>
      </a>
    </footer>
  )
}

export default Footer
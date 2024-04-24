import styles from '../styles/Home.module.css'

export default function Card({ media }) {
  return (
    <div className={styles.social}>
      <img src={media.icon} className={styles.icon}/>
      <div>
        {/* {media.notes}{" "} */}
        <span className={styles.emphasize}>
          <a href={media.link} target="_blank">{media.link}</a>
        </span>
      </div>
    </div>
  )
}

import styles from '../styles/Home.module.css'

export default function Project({ project }) {
  return (
    <div className={styles.card}>
      <img src={project.images} className={styles.image}/>
      <div>
        {media.notes}{" "}
        <span className={styles.emphasize}>
          <a href={media.link} target="_blank">{media.link}</a>
        </span>
      </div>
    </div>
  )
}

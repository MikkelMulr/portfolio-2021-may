import classes from '../../styles/Card.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Card({title, img, destination}) {
  return (
    <div className={classes.Card}>
      <div className={classes.CardImg}>
      <Image src={img} height="200" width="200" alt="Project preview" />
      </div>
      <h2 className={classes.CardTitle}>{title}</h2>
      <div className={classes.CardButton}>
        <Link href={`/projects/${destination}`}>Explore</Link>
      </div>
    </div>
  )
}

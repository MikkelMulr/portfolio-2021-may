import Link from 'next/link'
import classes from '../../styles/Button.module.css'

export default function Button({destination, text}) {
  return (
    <div className={classes.Button}>
      <Link href={`/${destination}`}>{text}</Link>
    </div>
  )
}

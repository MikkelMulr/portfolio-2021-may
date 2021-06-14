import classes from '../../styles/Projects.module.css'
import Card from '../../components/ui/Card'

export default function projects() {

  return (
    <div className={classes.Projects}>
      <h1>Projects</h1>
      <section className={classes.linksContainer}>
        <ul>
          <li>
            <Card title="Lakeridge Health" img="/assets/img/lakebg.png" destination="p1" />
          </li>
          <li>
            <Card title="Project 2" img="/assets/img/lakebg.png" destination="p2" />
          </li>
          <li>
           <Card title="Project 2" img="/assets/img/lakebg.png" destination="p3" />
          </li>
        </ul>  
      </section>
    </div>
  )
}



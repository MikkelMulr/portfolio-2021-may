import fs from 'fs/promises'
import path from 'path'
import Image from 'next/image'
import classes from '../../../styles/project.module.css'
import Button from '../../../components/ui/Button'
import SvgLoader from '../../../components/ui/svg'

export default function Project({loadedProject}) {

  if (!loadedProject) {
    return <h1 className={classes.title}>Loading...</h1>
  }

  return (
    <div className={classes.project}>
      <section className={classes.contentContainer}>
        <h1 className={classes.title}>{loadedProject.title}</h1>
        <div className={classes.innerContentContainer}>
          <header className={classes.header}>
            <Image src={`/assets/img/${loadedProject.img}`} width="244" height="244" alt="project preview" />
            <ul>
              <li><a href="">VISIT</a></li>
              <li><a href="">GITHUB</a></li>
            </ul>
          </header>
          <section className={classes.articles}>
            <article className={classes.article}>
              <p className={classes.content}>{loadedProject.desc}</p>
            </article>
            <article className={classes.article}>
              <div className={classes.list}>
                <h2 className={classes.title}>Built with:</h2>
                <ul className={classes.contentList}>
                  {loadedProject.tech.map(tech => <li className={classes.contentListItem} key={tech}><SvgLoader path={tech}/></li>)}
                </ul>
              </div>
            </article>      
          </section>
        </div>
        <Button destination="projects" text="Back to Projects"/>
      </section>
    </div>
  )
}


async function getData() {

  const filePath = path.join(process.cwd(), 'data', 'project-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  
  return data;
}

export async function getStaticProps(context) {
  
  const {params} = context;
  console.log(params);
  const projectId = params.pid;
  const data = await getData();
  const project = data.projects.find(project => project.pid === projectId);
  console.log(data);

  if (!project) {
    return {notFound: true}
  }

  return {
    props: {
      loadedProject: project
    }
  }
  
}

export async function getStaticPaths() {
  const data = await getData();
  const pids = data.projects.map(project => project.pid);
  const pathsWithParams = pids.map(pid => ({params: {pid: pid}}));
  return {
    paths: pathsWithParams,
    fallback: false 
  }
}

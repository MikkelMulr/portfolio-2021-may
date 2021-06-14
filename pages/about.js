import aboutStyles from '../styles/About.module.css'
export default function about() {
  return (
    <div className={aboutStyles.About}>
      <h1 className={aboutStyles.title}>About</h1>
      <p>I come from a background in art, which has given me a deep appreciation for good design and knowing when things work and simply don't, then iterating until it locks in; a straight forward approach based on years of experience.</p>  
      <p>Choosing to leave working commercially as an illustrator was a decision I made because I wanted to be involved in something bigger and challenging in new ways. Programming was something that I had tinkered with for many years, diving into web development became the thing that made sense, so here we are.</p>
    </div>
  )
}

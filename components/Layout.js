import layoutStyles from '../styles/Layout.module.css'
import Nav from '../components/Nav'

export default function Layout({children}) {
  return (
    <>
    <Nav />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>
          {/* Header */}
          {children}
        </main>
      </div> 
    </>
  )
}

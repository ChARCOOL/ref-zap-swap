import { Router, Outlet } from 'react-location'
import Nav from './components/Nav'
import { location, routes } from './router'

const styles = {
  wrapper: `bg-[#001220] w-screen h-screen`
}

function App() {
  return (
    <Router routes={routes} location={location}>
      <div className={styles.wrapper}>
        <Nav />
        <Outlet />
      </div>
    </Router>
  )
}

export default App

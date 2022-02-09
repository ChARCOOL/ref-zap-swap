import { Link } from 'react-location'
import Connect from './Connect'

const styles = {
  wrapper: `flex items-center justify-between text-gray-400 font-[Poppins] text-lg pt-8 px-20`,
  logo: `text-xl font-bold`,
  list: `flex space-x-8`,
  item: `hover:text-[#00c0a2]`
}

const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <p className={styles.logo}>DavudovSwap</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Swap</Link>
        </li>
        <li className={styles.item}>
          <Link to="/stableswap">StableSwap</Link>
        </li>
        <li className={styles.item}>
          <p>Pools</p>
        </li>
        <li className={styles.item}>
          <Link to="/farms">Farms</Link>
        </li>
        <li className={styles.item}>
          <Link to="/xref">xREF</Link>
        </li>
        <li className={styles.item}>
          <Link to="/risks">Risks</Link>
        </li>
      </ul>
      <Connect />
    </nav>
  )
}

export default Nav

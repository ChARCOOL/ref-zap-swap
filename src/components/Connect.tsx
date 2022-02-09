import { useState } from 'react'
import { Link } from 'react-location'
import useWallet from '../hooks/useWallet'
import { debounce } from '../libs/debounce'
import { BiLogIn, BiUser } from 'react-icons/bi'

const styles = {
  wrapper: `flex justify-center border-2 rounded-2xl border-[#00c0a2] text-[#00c0a2] text-sm px-2 py-1 cursor-pointer`,
  dropdown: `absolute mt-8 border-2 border-gray-400 bg-gray-700 py-2 rounded-2xl text-gray-400`,
  item: `hover:text-white hover:bg-gray-500 py-3 px-6 flex items-center`
}

const Connect = () => {
  const wallet = useWallet()

  const [opened, setOpened] = useState(false)

  const signIn = () => {
    wallet?.requestSignIn()
  }

  const signOut = () => {
    wallet?.signOut()
  }

  const walletAccountId = wallet?.account().accountId

  if (wallet?.isSignedIn()) {
    return (
      <div
        className={styles.wrapper}
        onMouseOver={() => debounce(() => setOpened(true), 50)}
        onMouseOut={() => debounce(() => setOpened(false), 200)}
      >
        <p>{walletAccountId}</p>
        {opened && (
          <div className={styles.dropdown}>
            <li className={styles.item}>
              <div className="pr-2">
                <BiUser size={24} />
              </div>
              <Link>View account</Link>
            </li>
            <li className={styles.item} onClick={signOut}>
              <div className="pr-3">
                <BiLogIn size={24} />
              </div>
              <p>Sign out</p>
            </li>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={styles.wrapper} onClick={signIn}>
      Connect to NEAR
    </div>
  )
}

export default Connect

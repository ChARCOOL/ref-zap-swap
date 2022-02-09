import { Account } from 'near-api-js'
import { useEffect, useState } from 'react'
import useWallet from './useWallet'

const useAccount = () => {
  const wallet = useWallet()

  const [account, setAccount] = useState<Account | null>(null)

  useEffect(() => {
    ;(async () => {
      if (wallet == null) return

      setAccount(new Account(wallet.account().connection, wallet.account().accountId))
    })()
  }, [wallet])

  return account
}

export default useAccount

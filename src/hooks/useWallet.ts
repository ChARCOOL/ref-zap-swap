import { WalletConnection } from 'near-api-js'
import React, { useEffect, useState } from 'react'
import { getWallet } from '../libs/nearConnector'

const useWallet = () => {
  const [wallet, setWallet] = useState<WalletConnection | null>(null)

  useEffect(() => {
    ;(async () => {
      setWallet(await getWallet())
    })()
  }, [])

  return wallet
}

export default useWallet

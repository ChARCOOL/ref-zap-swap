import { connect, ConnectConfig, keyStores, WalletConnection } from 'near-api-js'

const config: ConnectConfig = {
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  headers: {}
}

export const getNear = async () => await connect(config)

export const getWallet = async () => new WalletConnection(await getNear(), null)

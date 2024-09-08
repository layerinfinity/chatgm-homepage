import { http, createConfig, CreateConnectorFn } from 'wagmi'
import { skaleTitanTestnet, skaleEuropa, skaleEuropaTestnet } from 'wagmi/chains'
import { coinbaseWallet, injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { authConnector } from '@web3modal/wagmi'

// 0. Setup queryClient
export const queryClient = new QueryClient()
const projectId = '796a6fe9221b10997a9ff594b6282bb5'

const metadata = {
  name: '1chainAi',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}


const chains = [skaleTitanTestnet, skaleEuropaTestnet] as const
export const memoContracts: { [key: string]: string } = { 1020352220: '35Dfb847548213ECF763104B65012A28c87ea9af', 1444673419: '09769DD5Eb254Aa5CAb9AAB71FE80D3a50688373' }

const connectors: CreateConnectorFn[] = []
connectors.push(walletConnect({ projectId, metadata, showQrModal: false })) // showQrModal must be false
connectors.push(injected({ shimDisconnect: true }))
connectors.push(
  coinbaseWallet({
    appName: metadata.name,
    appLogoUrl: metadata.icons[0]
  })
)

connectors.push(
  authConnector({
    options: { projectId },
    // socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'], // add Social logins
    showWallets: true,
    email: false,
    walletFeatures: true
  })
)
export const config = defaultWagmiConfig({
  chains,
  projectId,
  connectors,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

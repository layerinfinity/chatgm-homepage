import { CreateConnectorFn } from 'wagmi'
// import { skaleTitanTestnet, skaleEuropa, skaleEuropaTestnet } from 'wagmi/chains'
import { coinbaseWallet, injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

// import { createWeb3Modal } from '@web3modal/wagmi/react'
// import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { authConnector } from '@web3modal/wagmi'

import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { skaleTitanTestnet, skaleEuropaTestnet, AppKitNetwork } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'


// 0. Setup queryClient
export const queryClient = new QueryClient()
const projectId = '796a6fe9221b10997a9ff594b6282bb5'

const metadata = {
  name: '1chainAi',
  description: 'The Quality Control Layer for AI Models',
  url: 'https://1chain.ai/beta', // origin must match your domain & subdomain
  icons: ['https://1chain.ai/images/seo/search-tool.png']
}


const chains = [skaleTitanTestnet, skaleEuropaTestnet] as const
export const memoContracts: { [key: string]: string } = { 1020352220: '9950A6Ff4a68C8c02B563605d5c95B7302076f17', 1444673419: '09769DD5Eb254Aa5CAb9AAB71FE80D3a50688373' }



const connectors: CreateConnectorFn[] = []

connectors.push(walletConnect({ projectId, metadata, showQrModal: false })) // showQrModal must be false
connectors.push(injected({ shimDisconnect: true }))
connectors.push(
  coinbaseWallet({
    appName: metadata.name,
    appLogoUrl: metadata.icons[0]
  })
)

// connectors.push(
//   authConnector({
//     options: { projectId },
//     // socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'], // add Social logins
//     showWallets: true,
//     email: false,
//     walletFeatures: true
//   })
// )
const networks = [skaleTitanTestnet, skaleEuropaTestnet]

// 4. Create Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  connectors,
  ssr: true
})

createAppKit({
  adapters: [wagmiAdapter],
  networks: [skaleTitanTestnet, skaleEuropaTestnet],
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})
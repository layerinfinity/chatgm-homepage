import { CreateConnectorFn } from 'wagmi'
import { coinbaseWallet, injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { createAppKit } from '@reown/appkit/react'
import { skaleTitanTestnet, skaleTitan, AppKitNetwork } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'


export const queryClient = new QueryClient()
const projectId = '796a6fe9221b10997a9ff594b6282bb5'

const metadata = {
  name: '1chainAi',
  description: 'The Quality Control Layer for AI Models',
  url: 'https://1chain.ai/beta', // origin must match your domain & subdomain
  icons: ['https://1chain.ai/images/seo/search-tool.png']
}

// export const BASE_URL = 'http://localhost:3001'
export const BASE_URL = 'https://api.chatgm.com'
export const memoContracts: { [key: string]: string } = { 1350216234: "7f69aC0A564863C222b2ff51e8E5127F1797696C", 1020352220: '5f058BC90096D89dc3c06a0a1826951d15f0Cfc1', }



const connectors: CreateConnectorFn[] = []

connectors.push(walletConnect({ projectId, metadata, showQrModal: false })) // showQrModal must be false
connectors.push(injected({ shimDisconnect: true }))
connectors.push(
  coinbaseWallet({
    appName: metadata.name,
    appLogoUrl: metadata.icons[0]
  })
)

const networks = [skaleTitan, skaleTitanTestnet]

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  connectors,
  ssr: true
})

createAppKit({
  adapters: [wagmiAdapter],
  networks: [skaleTitan, skaleTitanTestnet],
  projectId,
  metadata,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})
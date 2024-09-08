

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config, queryClient, memoContracts } from './wagmi/config'
import { BetaAI } from './beta_ai'
import { Box, Container } from '@mantine/core'


export function BetaHome() {
  return (


    <BetaAI />

  )
}
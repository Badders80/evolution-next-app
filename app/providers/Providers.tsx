'use client'

import { ReactNode } from 'react'
import { ReactQueryProvider } from '@/lib/ReactQueryProvider'
import dynamic from 'next/dynamic'
import { AuthClient } from '@futureverse/auth'

// Dynamically import the auth provider with SSR disabled
const FutureverseAuthProvider = dynamic(
  () => import('@futureverse/auth-react').then((mod) => mod.FutureverseAuthProvider),
  { ssr: false }
)

const authClient = new AuthClient({
  appId: process.env.NEXT_PUBLIC_FV_APP_ID || '',
  baseUrl: 'https://auth.futureverse.dev',
})

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      <FutureverseAuthProvider authClient={authClient}>
        {children}
      </FutureverseAuthProvider>
    </ReactQueryProvider>
  )
}

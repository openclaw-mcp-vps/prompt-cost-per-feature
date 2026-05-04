import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptCost — Track AI Costs by Product Feature',
  description: 'Instrument your AI calls by feature and get real-time cost breakdowns per product area. Built for engineering leads and PMs at AI-powered startups.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c9c6f6b7-b0f2-4473-94ea-20e106e39432"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

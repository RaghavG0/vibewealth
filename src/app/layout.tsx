// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white font-sans">
        <header className="flex items-center justify-between p-4 shadow">
          <h1 className="text-2xl font-bold">VibeWealth</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/dream-based-budgeting">Budgeting</Link>
            <Link href="/content-feed">Content Feed</Link>
            <Link href="/money-plan">Money Plan</Link>
            <Link href="/creator-dashboard">Dashboard</Link>
            <Link href="/ai-chat">AI Chat</Link>
          </nav>
          <DarkModeToggle />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="text-center p-4 text-sm text-gray-500 dark:text-gray-400">
          © 2025 VibeWealth
        </footer>
      </body>
    </html>
  )
}

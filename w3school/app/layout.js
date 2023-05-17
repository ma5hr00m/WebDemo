import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'w3school 在线教程',
    description: 'w3school demo',
}

export default function RootLayout({ children }) {
    return (
        <html lang="zh-CN">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

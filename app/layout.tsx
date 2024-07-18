import type { Metadata } from "next"
import { Afacad } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

// Include the Afaacad font
const afacad = Afacad({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vista Logica",
  description:
    "Optmising business outcomes through technology and digital enablemen",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={afacad.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.GOOGLE_G_TAG!} />
    </html>
  )
}

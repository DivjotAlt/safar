import "../styles/globals.css";
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: { Component: any, pageProps: object }) {
  return <div>
    <Head>
      <title>Safar</title>

    </Head>
    <Component {...pageProps} className={inter.className} />
  </div>
}
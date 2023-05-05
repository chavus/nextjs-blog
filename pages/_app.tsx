import { AppProps } from 'next/app'
import '../styles/globals.css'
import Link from 'next/link'

export default function App({Component, pageProps}:AppProps){

    return <Component {...pageProps}/>
    
}
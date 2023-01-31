import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="fa" dir='rtl'>
      <Head />

      {/* <Script src='/main.js' /> */}
    
      
      <body>
        <Main />
        <NextScript />
        <showMenu/>
        {/* <!--===== SCROLL REVEAL =====--> */}
    <Script src="https://unpkg.com/scrollreveal"/>
  {/* <Script src='/main.js'/> */}
      </body>
    </Html>
  )
}

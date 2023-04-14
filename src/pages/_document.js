import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <script
          type="text/javascript"
          src="https://unpkg.com/aos@next/dist/aos.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      {/* <Script
        src="https://unpkg.com/aos@next/dist/aos.js"
        onLoad={() => {
          console.log("Script has loaded");
        }}
      />
      <script>AOS.init();</script> */}
    </Html>
  );
}

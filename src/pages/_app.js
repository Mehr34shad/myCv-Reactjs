import "../../public/css/boxicons.min.css";
import "../../public/css/aos.min.css";
import "../../public/css/styles.css";
// import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        src="https://unpkg.com/aos@next/dist/aos.js"
        onLoad={() => {
          console.log("Script has loaded");
        }}
      /> */}
      <Component {...pageProps} />
    </>
  );
}

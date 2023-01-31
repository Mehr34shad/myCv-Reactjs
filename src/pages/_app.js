// import '@/styles/globals.css'
import Head from 'next/head';
import '../../public/css/boxicons.min.css';
import '../../public/css/styles.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
         <link  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
         rel="stylesheet"
         integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
         crossOrigin="anonymous" />
       </Head> */}
      <Script src="https://unpkg.com/scrollreveal" />

<Script>
  {`






const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')



const navLink = document.querySelectorAll('.nav__link');

function linkAction() {

    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');


    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });


sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });


sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });


sr.reveal('.work__img', { interval: 200 });

sr.reveal('.contact__input', { interval: 200 });





  `}
</Script>

      {/* <Head>
         <link  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
         rel="stylesheet"
         integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
         crossOrigin="anonymous" />
       </Head>
       <Script 
         id="bootstrap-cdn"
 src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" /> */}
      <Component {...pageProps} />
    </>
  );
}
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import sr from 'scrollreveal';

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Mehrshad Moradshan | مهرشاد مرادشان</title>
        {/* <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}

        <meta name="description" content="سایت شخصی مهرشاد مرادشان" />
        <meta
          name="keywords"
          content="مهرشاد مرادشان, mehrshad, moradshan ,مهرشاد و مرادشان"
        />
        <meta property="og:title" content="مهرشاد مرادشان" />
        {/* <!-- ===style=== --> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div>
        {/*===== HEADER =====*/}
        <header className="l-header">
          <nav className="nav bd-grid">
            <div>
              {" "}
              <a href="#" className="nav__logo">
                Mehrshad
              </a>{" "}
            </div>
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active">
                    خانه
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    درباره من
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    مهارت ها
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#work" className="nav__link">
                    نمونه کار ها
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    ارتباط با من
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle">
              {" "}
              <i className="bx bx-menu" />{" "}
            </div>
          </nav>
        </header>
        <main className="l-main">
          {/*===== HOME =====*/}
          <section className="home bd-grid" id="home">
            <div className="home__data">
              <h1
                className="home__title"
                data-aos="fade-down"
                // data-aos-offset="200"
                // data-aos-delay="300"
                data-aos-duration="2000"
                // data-aos-easing="ease-in-out"
              >
                سلام
                <br /> <span className="home__title-color">
                  مهرشاد مرادشان
                </span>{" "}
                هستم!
                <br />
                طراح و توسعه دهنده وب
              </h1>
              <a
                href="#contact"
                className="button"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="400"
                data-aos-duration="2000"
                // data-aos-easing="ease-in-out"
              >
                ارتباط با من
              </a>
            </div>
            <div className="home__social">
              <a
                href="https://www.instagram.com/mehrshad_mod/"
                className="home__social-icon"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <i className="bx bxl-instagram" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=989168577669"
                className="home__social-icon"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <i className="bx bxl-whatsapp" />
              </a>
              <a
                href="https://t.me/MoradShan"
                className="home__social-icon"
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <i className="bx bxl-telegram" />
              </a>
              <a
                href="https://github.com/Mehr34shad/"
                className="home__social-icon"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <i className="bx bxl-github" />
              </a>
            </div>
          </section>
          {/*===== ABOUT =====*/}
          <section id="about" className="about section">
            <h2 className="section-title">درباره من</h2>
            <div className="about__container bd-grid">
              <div
                className="about__img"
                data-aos="fade-down"
                data-aos-offset="200"
                // data-aos-delay="400"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                {" "}
                <Image
                  src="/img/work1.jpg"
                  alt=""
                  width={400}
                  height={400}
                />{" "}
              </div>
              <div>
                <h2
                  className="about__subtitle"
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="400"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  مهرشادم
                </h2>
                <p
                  className="about__text"
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="400"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  متولد 1378 ساکن اهواز،فعالیت در حوزه برنامه نویسی و آی تی رو
                  از سال 1399 شروع کردم و با چالش های زیادی روبرو شدم و سابقه
                  چند کار گروهی و انفرادی رو دارم و همیشه و هروز در حال یادگیری
                  هستم و این داستان ادامه داره....
                </p>
              </div>
            </div>
          </section>
          {/*===== SKILLS =====*/}

          <section className="skills section" id="skills">
            <h2 className="section-title">مهارت های من</h2>
            <div className="skills__container bd-grid">
              <div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxl-html5 skills__icon" />{" "}
                    <span className="skills__name">Html5</span>{" "}
                  </div>
                  <div className="skills__bar skills__html"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">90%</span>{" "}
                  </div>
                </div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxl-css3 skills__icon" />{" "}
                    <span className="skills__name">Css3</span>{" "}
                  </div>
                  <div className="skills__bar skills__css"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">80%</span>{" "}
                  </div>
                </div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxl-sass skills__icon" />{" "}
                    <span className="skills__name">Sass</span>{" "}
                  </div>
                  <div className="skills__bar skills__sass"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">85%</span>{" "}
                  </div>
                </div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxl-javascript skills__icon" />{" "}
                    <span className="skills__name">JavaScript</span>{" "}
                  </div>
                  <div className="skills__bar skills__js"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">70%</span>{" "}
                  </div>
                </div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxl-jquery skills__icon" />{" "}
                    <span className="skills__name">JQuery</span>{" "}
                  </div>
                  <div className="skills__bar skills__js"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">65%</span>{" "}
                  </div>
                </div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxl-react skills__icon" />{" "}
                    <span className="skills__name">ReactJs</span>{" "}
                  </div>
                  <div className="skills__bar skills__js"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">80%</span>{" "}
                  </div>
                </div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxl-nodejs skills__icon" />{" "}
                    <span className="skills__name">NextJs</span>{" "}
                  </div>
                  <div className="skills__bar skills__js"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">60%</span>{" "}
                  </div>
                </div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxs-paint skills__icon" />{" "}
                    <span className="skills__name">Material Ui</span>{" "}
                  </div>
                  <div className="skills__bar skills__material"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">80%</span>{" "}
                  </div>
                </div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxl-bootstrap skills__icon" />{" "}
                    <span className="skills__name">BootStrap</span>{" "}
                  </div>
                  <div className="skills__bar skills__bootstrap"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">85%</span>{" "}
                  </div>
                </div>
                <div
                  className="skills__data"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <div className="skills__names">
                    {" "}
                    <i className="bx bxl-wordpress skills__icon"></i>{" "}
                    <span className="skills__name">WordPress</span>{" "}
                  </div>
                  <div className="skills__bar skills__wordpress"> </div>
                  <div>
                    {" "}
                    <span className="skills__percentage">75%</span>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Image
                  src="/img/work3.jpg"
                  alt=""
                  className="skills__img"
                  width={400}
                  height={400}
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                />{" "}
              </div>
            </div>
          </section>
          {/*===== WORK =====*/}
          <section className="work section" id="work">
            <h2 className="section-title">نمونه کار های اخیر</h2>
            <div className="work__container bd-grid">
              <div
                className="work__img"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                {" "}
                <Image
                  width={400}
                  height={400}
                  src="/img/work/work-1.png"
                  alt="work-1"
                />{" "}
              </div>
              <div
                className="work__img"
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                {" "}
                <Image
                  width={400}
                  height={400}
                  src="/img/work/work-2.png"
                  alt="work-2"
                />{" "}
              </div>
              <div
                className="work__img"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                {" "}
                <Image
                  width={400}
                  height={400}
                  src="/img/work/work-3.png"
                  alt="work-3"
                />{" "}
              </div>
            </div>
          </section>
          {/*===== CONTACT =====*/}
          <section className="contact section" id="contact">
            <h2 className="section-title">ارتباط با من</h2>
            <div className="contact__container bd-grid">
              <form name="contact" method="post" className="contact__form">
                <input
                  type="text"
                  placeholder="نام و نام خانوداگی"
                  className="contact__input"
                  name="name"
                  data-aos="fade-down"
                  data-aos-delay="300"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                />
                <input
                  type="mail"
                  name="email"
                  placeholder="ایمیل شما"
                  className="contact__input"
                  data-aos="fade-down"
                  data-aos-delay="400"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                />
                <textarea
                  name="message"
                  id
                  cols={0}
                  rows={10}
                  placeholder="پیام شما..."
                  className="contact__input"
                  defaultValue={""}
                  data-aos="fade-down"
                  data-aos-delay="500"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                />
                <input
                  type="submit"
                  name="send"
                  defaultValue="ارسال پیام"
                  className="contact__button button"
                />
              </form>
            </div>
          </section>
        </main>
        {/*===== FOOTER =====*/}
        <footer className="footer">
          <p className="footer__title">09168577669</p>
          <div className="footer__social">
            {" "}
            <a
              href="https://api.whatsapp.com/send?phone=989168577669"
              className="footer__icon"
            >
              <i className="bx bxl-whatsapp" />
            </a>{" "}
            <a
              href="https://www.instagram.com/mehrshad_mod/"
              className="footer__icon"
            >
              <i className="bx bxl-instagram" />
            </a>{" "}
            <a href="https://t.me/MoradShan" className="footer__icon">
              <i className="bx bxl-telegram" />
            </a>{" "}
          </div>
          <p>
            © تمامی حقوق مادی و معنوی این سایت متعلق به مهرشاد مرادشان می‌باشد.
          </p>
        </footer>
        {/* <Script>
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
            `}
        </Script> */}

        {/* <script>AOS.init();</script> */}
      </div>
    </>
  );
}
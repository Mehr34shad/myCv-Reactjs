import React from "react";

function Hero() {

  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1
          className="home__title"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          سلام
          <br /> <span className="home__title-color">مهرشاد مرادشان</span> هستم!
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
        >
          ارتباط با من
        </a>
      </div>
      <div className="home__social" >
        <a
          href="https://www.instagram.com/mehrshad_mod"
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
  );
}

export default Hero;

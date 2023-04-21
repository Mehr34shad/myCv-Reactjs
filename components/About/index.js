import Image from "next/image";


const About = () => {
  return (
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
  );
};

export default About;

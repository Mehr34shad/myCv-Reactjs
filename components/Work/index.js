import Image from "next/image";
import Link from "next/link";

const Work = () => {
  const workExamples = [
    {
      text: "دهیاری حسین اّباد",
      src: "/img/work/دهیاری حسین اّباد.png",
      url: "https://hosseinabad-cn.ir",
    },
    {
      text: "فروشگاه نسیم",
      src: "/img/work/فروشگاه نسیم.png",
      url: "https://nasim-market.ir",
    },
    {
      text: "بازی شلم و حکم",
      src: "/img/work/بازی شلم و حکم.png",
      url: "https://passoversnightmare.com",
    },

  ];
  return (
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
        data-aos-delay="500"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        {" "}
        <Image
          width={400}
          height={400}
          src="/img/work/movie.png"
          alt="work-3"
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
        <Link href="https://www.mohamadbinandeh.ir">
          <Image
            width={400}
            height={400}
            src="/img/work/binandeh.png"
            alt="mohamadbinandeh"
            onClick={""}
            link="mohamadbinandeh.ir"
          />
        </Link>{" "}
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
          alt="movie"
        />{" "}
      </div>
    </div>
  </section>
  );
};

export default Work;

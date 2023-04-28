import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    Aos.init({
      delay: 300,
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);
  const workExamples = [
    {
      text: "دهیاری حسین اّباد",
      src: "/img/work/hosseinabad.png",
      url: "https://hosseinabad-cn.ir",
    },

    {
      text: "سایت دانلود فیلم",
      src: "/img/work/movie.png",
      url: "https://passoversnightmare.com",
    },
    {
      text: "سایت شخصی محمد بیننده",
      src: "/img/work/binandeh.png",
      url: "https://mohamadbinandeh.ir",
    },
    {
      text: "سایت گالری عکس",
      src: "/img/work/gallery-image.png",
      url: "https://mohamadbinandeh.ir",
    },
  ];
  return (
    <section className="work section" id="work">
      <h2 className="section-title">نمونه کار های اخیر</h2>
      <div className="work__container bd-grid">
        {workExamples.map((item, index) => (
          <div className="work__img" data-aos="fade-down" key={index}>
            {" "}
            <Image
              width={400}
              height={400}
              src={item.src}
              alt={item.text}
            />{" "}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

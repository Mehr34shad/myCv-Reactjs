import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

const Skill = () => {
  useEffect(() => {
    Aos.init({
      delay:300,
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);
  const items = [
    { text: "Html5", number: 80, icon: "bx bxl-html5" },
    { text: "Css3", number: 80 },
    { text: "Sass", number: 85 },
    { text: "JavaScript", number: 70 },
    { text: "JQuery", number: 65 },
    { text: "ReactJs", number:80 },
    { text: "NextJs", number: 60 },
    { text: "Material Ui", number: 80 },
    { text: "BootStrap", number: 85 },
    { text: "WordPress", number: 70 },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">مهارت های من</h2>
      <div className="skills__container bd-grid">
        <div>
        {items.map((item, index) => (
          <div
          key={index}
          className="skills__data"
          data-aos="fade-down"
          >
            <div className="skills__names">
              {" "}
              <i className="bx bxl-html5 skills__icon" />{" "}
              <span className="skills__name">{item.text}</span>{" "}
            </div>
            <div className="skills__bar skills__html"> </div>
            <div>
              {" "}
              <span className="skills__percentage">{item.number}%</span>{" "}
            </div>
          </div>
            ))}
        </div>
        <div>
          {" "}
          <Image 
          width={400}
            height={400}
            src="/img/work3.jpg"
            alt="work3"
            className="skills__img"
            data-aos="fade-down"
            data-aos-delay="600"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default Skill;

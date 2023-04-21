import Image from "next/image";

const Skill = () => {
  const items = [
    { text: "Html5", number: 80, icon: "bx bxl-html5" },
    { text: "TypeScript", number: 86 },
    { text: "React Js", number: 89 },
    { text: "Next Js", number: 90 },
    { text: "Node Js", number: 65 },
    { text: "Material Ui", number: 95 },
    { text: "Bootstrap", number: 80 },
    { text: "Html & Css", number: 91 },
    { text: "Sass", number: 90 },
    { text: "Redux", number: 70 },
    { text: "Ui", number: 90 },
    { text: "Ux", number: 90 },
  ];

  return (
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
              <span className="skills__percentage">{}</span>{" "}
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
  );
};

export default Skill;

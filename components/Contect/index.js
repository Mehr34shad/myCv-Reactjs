
const Contect = () => {
  return (
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
  );
};

export default Contect;

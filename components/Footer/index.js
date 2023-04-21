

const Footer = () => {
  return (
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
  );
};

export default Footer;

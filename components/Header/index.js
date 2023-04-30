import Link from "next/link";


const Header = () => {
  const pages = [
    { name: "خانه", href: "#home" },
    { name: "درباره من", href: "#about" },
    { name: "توانایی های من", href: "#skills" },
    { name: "نمونه کارهای من", href: "#work" },
    { name: "ارتباط با من", href: "#contact" },
  ];
  return (
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
            {pages.map((page, index) => (
              <li className="nav__item" key={index}>
                <Link href={page.href} className="nav__link">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div class="nav__toggle" id="nav-toggle">
                <i class='bx bx-menu'></i>
            </div>
      </nav>
    </header>
  );
};

export default Header;

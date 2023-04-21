import { Fragment, useState } from "react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOnClose = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <div className="nav__toggle" id="nav-toggle" open={open} handleOnClose={handleOnClose}>
          {" "}
          <i className="bx bx-menu" onClick={() => handleOnClose()} />{" "}
        </div>
    </Fragment>
  );
};

export default Layout;

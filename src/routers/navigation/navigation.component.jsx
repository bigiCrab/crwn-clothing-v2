import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link to={"/"}>
          <div className="logo-container">
            <CrwnLogo className="logo"></CrwnLogo>
          </div>
        </Link>
        <ul>
          <li className="nav-links-container">
            <Link className="nav-link" to={"/shop"}>
              SHOP
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;

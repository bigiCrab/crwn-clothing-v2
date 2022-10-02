import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>LOGO</Link>
        <ul>
          <li>
            <Link to={"/shop"}>SHOP</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;

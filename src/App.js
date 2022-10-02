import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routers/home/home.component";

function Navigation() {
  return (
    <div>
      <nav>i am nav</nav>
      <Outlet />
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<div>SHOP thing</div>}></Route>
      </Route>
    </Routes>
  );
};

export default App;

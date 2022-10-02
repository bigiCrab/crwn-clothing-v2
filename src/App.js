import { Routes, Route } from "react-router-dom";
import Home from "./routers/home/home.component";

const App = () => {
  return (
    <>
      <nav>nav</nav>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="sub" element={<div>sub</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

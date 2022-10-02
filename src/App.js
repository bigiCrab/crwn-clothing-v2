import { Routes, Route } from "react-router-dom";
import Navigation from "./routers/navigation/navigation.component";
import Home from "./routers/home/home.component";

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

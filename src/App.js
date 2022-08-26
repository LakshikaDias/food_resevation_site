import { Routes, Route } from "react-router-dom";

import Chef from "./pages/Chef";
import Customer from "./pages/Customer";
import Manager from "./pages/Manager";
import FoodDetail from "./pages/FoodDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path={`/:user/foods/:id`} element={<FoodDetail />} />
        <Route path="chef" element={<Chef />} />
        <Route path="manager" element={<Manager />} />
      </Routes>
    </div>
  );
}

export default App;

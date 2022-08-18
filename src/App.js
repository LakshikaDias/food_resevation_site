import { Routes, Route } from "react-router-dom";

import Cook from "./pages/Cook";
import Customer from "./pages/Customer";
import Manager from "./pages/Manager";
import FoodDetail from "./pages/FoodDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path={`foods/:id`} element={<FoodDetail />} />
        <Route path="cook" element={<Cook />} />
        <Route path="manager" element={<Manager />} />
      </Routes>
    </div>
  );
}

export default App;

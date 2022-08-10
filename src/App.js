import { Routes, Route } from "react-router-dom";

import Cook from "./pages/Cook";
import Customer from "./pages/Customer";
import Manager from "./pages/Manager";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="cook" element={<Cook />} />
        <Route path="manager" element={<Manager />} />
      </Routes>
    </div>
  );
}

export default App;

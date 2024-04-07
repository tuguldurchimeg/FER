import "./App.css";

import Main from "./components/Main";
import Help from "./components/Help";
import Login from "./components/Login";
import History from "./components/History";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

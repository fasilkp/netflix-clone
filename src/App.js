import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import axios from "axios";
import { apiBaseUrl } from "./utils/urls";
import Watch from "./components/Watch/Watch";


axios.defaults.baseURL=apiBaseUrl


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/watch/:id" element={<Watch/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

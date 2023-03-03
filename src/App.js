import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import axios from "axios";
import { apiBaseUrl } from "./utils/urls";

const instance=axios.create({
  baseURL: apiBaseUrl
});


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

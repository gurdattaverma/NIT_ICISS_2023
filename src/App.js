import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap';
import Homepage from "./Components/Homepage"
import History from './Components/History';
import Committee from './Components/Committee';

function App() {
  return (
    <div className="">
      <Container fluid className="">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/History" element={<History />} />
            <Route exact path="/Committees" element={<Committee />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

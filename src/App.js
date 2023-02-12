import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap';
import Homepage from "./Components/Homepage"
import History from './Components/History';
import Committee from './Components/Committee';
import Paper from './Components/Paper';
import Industrypaper from './Components/Industrypaper';
import Tutorials from './Components/Tutorials';
import Phdforum from './Components/Phdforum';
import Cameraready from './Components/Cameraready';
import Acceptedpaper from './Components/Acceptedpaper';
import Mainconference from './Components/Mainconference';
import Tutorialprogram from './Components/Tutorialprogram';
import Phdforumprogram from './Components/Phdforumprogram';
import Keynote from './Components/Keynote';

function App() {
  return (
    <div className="">
      <Container fluid className="">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/History" element={<History />} />
            <Route exact path="/Committees" element={<Committee />} />
            <Route exact path="/Paper" element={<Paper />} />
            <Route exact path="/Industrypaper" element={<Industrypaper />} />
            <Route exact path="/Tutorials" element={<Tutorials />} />
            <Route exact path="/PhDForums" element={<Phdforum />} />
            <Route exact path="/Cameraready" element={<Cameraready />} />
            <Route exact path="/Acceptedpaper" element={<Acceptedpaper />} />
            <Route exact path="/Program" element={<Mainconference />} />
            <Route exact path="/events-tutorials" element={<Tutorialprogram />} />
            <Route exact path="/events-Phdforum" element={<Phdforumprogram />} />
            <Route exact path="/Keynote" element={<Keynote />} />

          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav } from "react-bootstrap";

// import necessary object from react-router-dom
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// import "pages" component here
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    // define <BrowserRouter> as parent element
    <Router>
      <Container>
        <div>
          {/* Setup navigation here */}
          <Nav>
            <ul className="d-flex">
              <li className="me-5"><Link to="/"> Home </Link> </li>
              <li className="me-5"><Link to="/About" > About </Link> </li>
              <li className="me-5"><Link to="/Profile"> Profile </Link> </li>
            </ul>
          </Nav>
        </div>
        {/* code <Routes> and <Route> below, according to path and component */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Profile" element={<Profile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
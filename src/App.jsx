import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { NavBar } from "./components/navbar/navBar";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <NavBar />

                    <hr />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

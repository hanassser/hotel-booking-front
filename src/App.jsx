import './App.css'
import ExistingRooms from "./components/room/ExistingRooms.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import EditRoom from "./components/room/EditRoom.jsx";

function App() {

  return (
    <>
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/edit-room/:roomId" element={<EditRoom />} />
                    <Route path="/existing-rooms" element={<ExistingRooms />} />
                </Routes>
            </Router>
        </main>
    </>
  )
}

export default App

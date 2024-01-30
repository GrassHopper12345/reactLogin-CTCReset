import { Route, Routes, Navigate, Router } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
    const user = localStorage.getItem("token");

    return (
        // <Router>
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/signup" exact element={<Signup />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/" exact element={<Navigate replace to="/login" />} />
            </Routes>
        // </Router>
    );
}
export default App;
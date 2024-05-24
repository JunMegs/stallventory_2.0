import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import Home from "./home.jsx";

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path="/" element={<Navigate replace to="/login" />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;

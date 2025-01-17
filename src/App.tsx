import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext"; // Import the AuthProvider


const App = () => {
  return (
<AuthProvider>
      
    <Router>

      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
</AuthProvider>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext"; // Import the AuthProvider
import Account from "./pages/Account";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard/admin/DashBoard";


const App = () => {
  return (
<AuthProvider>
      
    <Router>

      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin/*" element={<Dashboard />} />
      </Routes>
    </Router>
</AuthProvider>
  );
};

export default App;

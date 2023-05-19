import { useState, useEffect } from "react";
import "./assets/app.scss"; 
import Header from "./components/Header";
import PageModel from "./components/PageModel";
import Sidebar from "./components/Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const unsusbcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoaded(true);
    });
    return () => unsusbcribe();
  };


  if (!loaded) return null

  return authenticated ? (
    
    <Home/>
  ) : (
    <Login />
  );
}
export default App;

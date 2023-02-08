import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./components/authentication/Register";
import Home from "./pages/Home";
import Login from "./components/authentication/Login";
import Navigation from "./components/share/Navigation";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import { setUser, toggleLoading } from "./features/auth/authSlice";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user?.email));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

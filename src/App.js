import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Register from "./components/authentication/Register";
import Home from "./pages/Home";
import Login from "./components/authentication/Login";
import Navigation from "./components/share/Navigation";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser, toggleLoading } from "./features/auth/authSlice";
import PrivateRoute from "./utils/PrivateRoute";
import MakeProfile from "./pages/MakeProfile";
import Dashboard from "./pages/Dashboard";
import AddPosition from "./pages/AddPosition";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user?.email));
        dispatch(getUser(user?.email));
        console.log(user.email);
      } else {
        dispatch(toggleLoading());
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {/* <Navigation /> */}
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
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="add-position" element={<AddPosition />} />
        </Route>

        <Route
          path="/make-profile"
          element={
            <PrivateRoute>
              <MakeProfile />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

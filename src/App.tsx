import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Technology from "./components/Technology/Technology";
import Learning from "./components/Main/Learning/Learning";
import Events from "./components/Main/Events/Events";
import Loading from "./UI/Loading";
import AuthProvider from "./store/auth-context";
import Login from "./components/Form/Login";
import Signup from "./components/Form/Signup";
import { Verification } from "./components/Verification";
import { PrivateRoute } from "./PrivateRoute";
import { ForgotPassword } from "./components/Form/ForgotPassword";
import { Add } from "./components/Main/Account/Add";
import { Upcoming } from "./components/Main/Account/Upcoming";
import { Pending } from "./components/Main/Account/Pending";
import { Completed } from "./components/Main/Account/Completed";
import AccountLayout from "./components/Main/Account/AccountLayout";
import AccountDetails from "./components/Main/Account/AccountDetails";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  /* Loading screen animation */
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={isLoading ? <Loading /> : <Home />} />
            <Route
              path="/login"
              element={isLoading ? <Loading /> : <Login />}
            />
            <Route
              path="/signup"
              element={isLoading ? <Loading /> : <Signup />}
            />
            <Route
              path="/tech"
              element={isLoading ? <Loading /> : <Technology />}
            />
            <Route
              path="/learn"
              element={isLoading ? <Loading /> : <Learning />}
            />
            <Route
              path="/events"
              element={isLoading ? <Loading /> : <Events />}
            />
            <Route
              path="/forgot-password"
              element={isLoading ? <Loading /> : <ForgotPassword />}
            />
            <Route
              path="/verification"
              element={isLoading ? <Loading /> : <Verification />}
            />
            <Route
              path="/account/add"
              element={
                <PrivateRoute>
                  <AccountLayout>
                    <Add />
                  </AccountLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/account/upcoming"
              element={
                <PrivateRoute>
                  <AccountLayout>
                    <Upcoming />
                  </AccountLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/account/pending"
              element={
                <PrivateRoute>
                  <AccountLayout>
                    <Pending />
                  </AccountLayout>
                </PrivateRoute>
              }
            />

            <Route
              path="/account/completed"
              element={
                <PrivateRoute>
                  <AccountLayout>
                    <Completed />
                  </AccountLayout>
                </PrivateRoute>
              }
            />
            <Route
              path="/account/details"
              element={
                <PrivateRoute>
                  <AccountLayout>
                    <AccountDetails />
                  </AccountLayout>
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

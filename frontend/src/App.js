import { Header, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  SignupPage,
  LandingPage,
  RentPage,
  DetailPage,
  ChatPage,
  FormPage,
} from "./pages";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { rentItems, rentRooms } from "./db";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [rentIt, setRentIt] = useState(rentRooms);
  const [prodIt, setProdIt] = useState(rentItems);

  return (
    <>
      <ToastContainer />
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="purchase" element={<HomePage rentIt={prodIt} />} />
        <Route path="rent" element={<RentPage rentIt={rentIt} />} />
        <Route
          path="login"
          element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path="form" element={<FormPage setRentIt={setRentIt} setProdIt={setProdIt}/>} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="chat" element={<ChatPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

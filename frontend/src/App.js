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
} from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="purchase" element={<HomePage />} />
        <Route path="rent" element={<RentPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="chat" element={<ChatPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

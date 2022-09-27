import { Header, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;

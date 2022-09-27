import { Header, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

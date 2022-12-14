import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import Home from "./pages/Home/Home";
import PageNotFound404 from "./pages/PageNotFound404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard/*" element={<Home />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </>
  );
}

export default App;

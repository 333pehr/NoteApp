import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import SignIn from "./pages/Auth/SignIn";
import Home from "./pages/Home/Home";
import PageNotFound404 from "./pages/PageNotFound404";
import SharedNotes from "./pages/SharedNotes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard/*" element={<Home />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/shared/:id" element={<SharedNotes />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </>
  );
}

export default App;

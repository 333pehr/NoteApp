//import "./style.css";
import Header from "../../components/Layout/Header";
import Navbar from "../../components/Layout/Navbar";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import NotesPage from "../NotesPage";
import Profile from "../Profile/Profile";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import FavouriteNotes from "../FavouriteNotes";

const HomePage = styled.div`
  height: 100vh;
  display: flex;
  position: fixed;
  width: 100%;
`;

const Page = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow-x: scroll;
  background-color: #f3f6fd;
`;

export default function Home() {
  const navigate = useNavigate();
  const authorized = async () => {
    await onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else {
        localStorage.setItem("uid", user.uid);
      }
    });
  };
  useEffect(() => {
    authorized();
  }, []);
  return (
    <>
      <Header />

      <HomePage>
        <Navbar />
        {/*<!--Container Main start-->*/}
        <Page>
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="favouritenotes" element={<FavouriteNotes />} />
          </Routes>
          {/*<!-- End Notes Card -->*/}
        </Page>
        {/*<!--Container Main end-->*/}
      </HomePage>
    </>
  );
}

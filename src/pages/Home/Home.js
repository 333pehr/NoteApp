//import "./style.css";
import Header from "../../components/Layout/Header";
import Navbar from "../../components/Layout/Navbar";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import NotesPage from "../NotesPage";
import Profile from "../Profile/Profile";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddNote from "../../components/AddNote";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const HomePage = styled.div`
  height: 100vh;
  display: flex;
  position: fixed;
`;

const Page = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow-x: scroll;
  background-color: #f3f6fd;
`;

export default function Home() {
  return (
    <>
      <Header />

      <HomePage>
        <Navbar />
        {/*<!--Container Main start-->*/}
        <Page>
          <div>
            <h1></h1>
            <Routes>
              <Route path="/" element={<NotesPage />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
          {/*<!-- End Notes Card -->*/}
        </Page>
        {/*<!--Container Main end-->*/}
      </HomePage>
    </>
  );
}

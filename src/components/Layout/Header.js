import styled from "styled-components";
import { auth } from "../../firebase-config";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Row = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 3rem;
  z-index: 100;
`;
const Profile = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export default function Header() {
  const [user, setuser] = useState({});
  return (
    <>
      <Row>
        <Profile>
          <img src="https://i.imgur.com/hczKIze.jpg" alt="logo" />
        </Profile>
      </Row>
    </>
  );
}

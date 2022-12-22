import styled from "styled-components";
import { useState, useEffect } from "react";
import { useAuth } from "../../firebase-config";

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
  top: 15px;
  right: 25px;
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
  const [photoUrl, setPhotoUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const user = useAuth();
  useEffect(() => {
    if (user?.photoURL) {
      setPhotoUrl(user.photoURL);
    }
  }, [user]);
  return (
    <>
      <Row>
        <Profile>
          <img src={photoUrl} alt="logo" />
        </Profile>
      </Row>
    </>
  );
}

import {
  BiUser,
  BiLayer,
  BiLogOut,
  BiEdit,
  BiBook,
  BiHeart,
} from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavBar = styled.div`
  height: 100vh;
  z-index: 100;
  background-color: #ffffff;
  padding-top: 35px;
  position: relative;
  transition: width 0.5s;
  width: ${(props) => (props.open ? "250px" : "75px")};
  @media (max-width: 768px) {
    width: ${(props) => (props.open ? "75px" : "0px")};
  }
`;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0rem 1.4rem;
  .Logo {
    margin-bottom: 3rem;
  }
  .Link {
    margin-bottom: 2rem;
  }
  .LastLink {
    position: fixed;
    bottom: 2rem;
  }
`;
const LinkContainer = styled.div`
  display: inline-flex;
  align-items: center;
  color: #000000;
  @media (max-width: 768px) {
    h4 {
      display: none;
    }
    .LinkIcon {
      scale: ${(props) => !props.open && "0"};
      transition: scale 0.5s;
    }
  }
`;

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavBar open={open}>
        <BsArrowLeftShort
          onClick={() => {
            setopen(!open);
          }}
          className={`bg-white text-dark text-5xl rounded-full absolute -right-7 top-8 border border-dark-purple cursor-pointer ${
            !open && "transform rotate-180"
          } duration-500`}
        />
        <UL>
          <li className="Logo">
            <NavLink to="/dashboard">
              <LinkContainer open={open}>
                <BiLayer className="text-2xl LinkIcon" />
                <h4
                  className={`${
                    !open && "scale-0"
                  }  origin-left text-2xl ml-2 duration-500 font-semibold`}
                >
                  NoteApp
                </h4>
              </LinkContainer>
            </NavLink>
          </li>
          <li className="Link">
            <NavLink to="/dashboard/profile">
              <LinkContainer open={open}>
                <BiUser className="text-2xl LinkIcon" />
                <h4
                  className={`${
                    !open && "scale-0"
                  }  origin-left text-xl ml-5 duration-500 font-normal`}
                >
                  Profile
                </h4>
              </LinkContainer>
            </NavLink>
          </li>
          <li className="Link">
            <NavLink to="/dashboard">
              <LinkContainer open={open}>
                <BiEdit className="text-2xl LinkIcon" />
                <h4
                  className={`${
                    !open && "scale-0"
                  }  origin-left text-xl ml-5 duration-500 font-normal`}
                >
                  Notes
                </h4>
              </LinkContainer>
            </NavLink>
          </li>
          <li className="Link">
            <NavLink>
              <LinkContainer open={open}>
                <BiBook className="text-2xl LinkIcon" />
                <h4
                  className={`${
                    !open && "scale-0"
                  }  origin-left text-xl ml-5 duration-500 font-normal`}
                >
                  Study
                </h4>
              </LinkContainer>
            </NavLink>
          </li>
          <li className="Link">
            <NavLink>
              <LinkContainer open={open}>
                <BiHeart className="text-2xl LinkIcon" />
                <h4
                  className={`${
                    !open && "scale-0"
                  }  origin-left text-xl ml-5 duration-500 font-normal`}
                >
                  Favorites
                </h4>
              </LinkContainer>
            </NavLink>
          </li>
          <li className="LastLink">
            <NavLink
              onClick={() => {
                handleLogout().then(() => {
                  navigate("/").catch((err) => console.log(err));
                });
              }}
            >
              <LinkContainer open={open}>
                <BiLogOut className="text-2xl LinkIcon" />
                <h4
                  className={`${
                    !open && "scale-0"
                  }  origin-left text-xl ml-5 duration-500 font-normal`}
                >
                  Log Out
                </h4>
              </LinkContainer>
            </NavLink>
          </li>
        </UL>
      </NavBar>
    </>
  );
}

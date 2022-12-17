import { useState, useRef } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../../firebase-config";
import "./SignIn.css";
import googleLogo from "./google.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function SignIn() {
  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const container = useRef();
  const date = new Date();

  const navigate = useNavigate();
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, Email, password).then(() => {
        navigate("/dashboard");
      });
    } catch (err) {
      console.log(err);
    }
  };
  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, Email, password)
        .then((UserCredential) => {
          setDoc(doc(db, "notes", UserCredential.user.uid), {
            fullName: fullName,
            userID: UserCredential.user.uid,
            notes: [
              {
                title: "Welcome to Notes App",
                color: "#000000",
                note: "This is a test note",
                isFavourite: false,
                date:
                  date.getDate() +
                  "/" +
                  date.getMonth() +
                  "/" +
                  date.getFullYear(),
              },
            ],
          });
        })
        .then(() => {
          navigate("/dashboard");
        });
    } catch (err) {
      console.log(err.message);
    }
  };
  const googleAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        // The AuthCredential type that was used
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <>
      <div className="outercontainer" ref={container}>
        <div className="formscontainer">
          <div className="signinsignup">
            {/*<!-- ===== Login Form Start ===== -->*/}
            <form
              onSubmit={(e) => {
                signIn();
                e.preventDefault();
              }}
              method="get"
              className="signinform"
            >
              <h2 className="title">Sign in to Your Account</h2>
              <div className="inputfield">
                <FontAwesomeIcon icon={faEnvelope} className="FaIcon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="inputfield">
                <FontAwesomeIcon icon={faLock} className="FaIcon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>
              <button className="SignInBtn"> Sign In </button>
              <p className="socialtext">Or</p>
              <div
                className="socialmedia"
                onClick={() => {
                  googleAuth();
                }}
              >
                <a href="#" className="socialicon">
                  <img src={googleLogo} alt="" />
                  <span>Sign in with Google</span>
                </a>
              </div>
            </form>
            {/*<!-- ===== Login Form End ===== -->*/}

            {/* <!-- ===== Register Form Start ===== --> */}
            <form
              method="post"
              className="signupform"
              onSubmit={(e) => {
                register();
                e.preventDefault();
              }}
            >
              <h2 className="title">Create Your Account</h2>
              <div className="inputfield">
                <FontAwesomeIcon icon={faUser} className="FaIcon" />
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
              </div>
              <div className="inputfield">
                <FontAwesomeIcon icon={faEnvelope} className="FaIcon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="inputfield">
                <FontAwesomeIcon icon={faLock} className="FaIcon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>
              <button className="SignInBtn" value="Sign up">
                Sign Up
              </button>
              <p className="socialtext">Or</p>
              <div
                className="socialmedia"
                onClick={() => {
                  googleAuth();
                }}
              >
                <a href="" className="socialicon">
                  <img src={googleLogo} alt="G-logo" />
                  <span>Sign up with Google</span>
                </a>
              </div>
            </form>
            {/* <!-- ===== Register Form Start ===== --> */}
          </div>
        </div>
        {/* <!-- ===== Login-Register Container End =====--> */}

        {/* <!-- ===== Background Panels Start =====--> */}
        <div className="panelscontainer">
          <div className="panel leftpanel">
            <div className="content">
              <h3>Welcome to NoteApp!</h3>
              <p>New here? If you don't have an account, you can register.</p>
              <button
                className="ChangeBtnInUp"
                id="sign-up-btn"
                onClick={() => {
                  container.current.classList.add("signupmode");
                }}
              >
                Register
              </button>
            </div>
          </div>
          <div className="panel rightpanel">
            <div className="content">
              <h3>Welcome to NoteApp!</h3>
              <p>
                One of us? If you have already registered, you can login to your
                account.
              </p>
              <button
                className="ChangeBtnInUp"
                id="sign-in-btn"
                onClick={() => {
                  container.current.classList.remove("signupmode");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===== Background Panels Start =====--> */}
    </>
  );
}

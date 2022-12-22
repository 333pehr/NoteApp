import { BiLock, BiEnvelope, BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PassContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #6596ec;
`;
const InputField = styled.div`
  display: flex;
  align-items: center;
`;
const ReturnContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  te
`;
export default function ForgotPassword() {
  return (
    <PassContainer>
      <ReturnContainer>
        <Link className="d-flex no-underline" to="/">
          <BiArrowBack className="text-white mr-2" size={30} />
          <h3 className="text-white">Login</h3>
        </Link>
      </ReturnContainer>
      <BiLock size={300} className="text-white" />
      <div>
        <h1 className="text-white text-center mb-4">Forgot Password?</h1>
        <p className="text-white">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.email.value);
          }}
        >
          <InputField className="inputfield">
            <BiEnvelope className="m-2 text-gray-500" size={22} />
            <input type="email" id="email" placeholder="Email" />
          </InputField>
          <button className="btn btn-danger w-full mt-4">Send</button>
        </form>
      </div>
    </PassContainer>
  );
}

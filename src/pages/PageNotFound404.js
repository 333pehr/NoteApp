import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cfd8dc;
  margin: 70px auto;
  border: 2px solid black;
  padding: 35px 5px;
  border-radius: 10px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.4);
`;

export default function PageNotFound404() {
  return (
    <>
      <Container className="col-lg-9 col-md-9 col-sm-11">
        <h2 className="text-center pb-3">Oops! Guess there is a problem</h2>
        <h4 className="text-center pb-4">
          We couldn't find the page you are looking for :(
        </h4>
        <h5 className="text-center pb-5">Error Code: 404</h5>
        <butotn className="mx-auto bg-red-500 px-2 py-1 border-2 border-black rounded-lg">
          <Link className="no-underline text-center text-white" to="/dashboard">
            Return to the Main Page
          </Link>
        </butotn>
      </Container>
    </>
  );
}

import { useState } from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";

const Row = styled.div`
  margin-bottom: 40px;
`;
const Footer = styled.footer`
  background-color: #ffffff8a;
  width: 100%;
  margin-top: 100px;
`;
const DarkDiv = styled.div`
  background-color: rgba(148, 143, 143, 0.2);
`;
const H5 = styled.div`
  margin-top: -35px;
`;
const LinkContainer = styled.div`
  background-color: rgba(85, 83, 83, 0.315);
`;
const CardBody = styled.div`
  background-color: #e3f2fd;
`;
const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [aboutme, setAboutme] = useState("");
  return (
    <>
      <ProfileContainer>
        <div className="w-100">
          <div className="mt-7">
            <Row>
              <div className="col-xl-8 m-auto order-xl-1">
                <div className="card bg-secondary shadow">
                  <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="mb-0">My account</h3>
                      </div>
                      <div className="col-4 text-right">
                        <a href="#!" className="btn btn-sm btn-primary">
                          Save
                        </a>
                      </div>
                    </div>
                  </div>
                  <CardBody className="card-body">
                    <form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4 w-100">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                Username
                              </label>
                              <input
                                type="text"
                                id="input-username"
                                className="form-control form-control-alternative"
                                placeholder="Username"
                                onChange={(e) => {
                                  setUsername(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <input
                                type="email"
                                id="input-email"
                                className="form-control form-control-alternative"
                                placeholder="neslihan@example.com"
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Password
                              </label>
                              <input
                                type="text"
                                id="input-first-name"
                                className="form-control form-control-alternative"
                                placeholder="Password"
                                value="********"
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                id="input-last-name"
                                className="form-control form-control-alternative"
                                placeholder="Last name"
                                defaultValue="Neslihan Arıkan"
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <h6 className="heading-small text-muted mb-4">
                        About Me
                      </h6>
                      <div className="pl-lg-4 w-100">
                        <div className="form-group focused">
                          <textarea
                            rows="4"
                            className="form-control form-control-alternative "
                            placeholder="A few words about you ..."
                            onChange={(e) => {
                              setAboutme(e.target.value);
                            }}
                            defaultValue="A few words about you ..."
                          ></textarea>
                        </div>
                      </div>
                    </form>
                  </CardBody>
                </div>
              </div>
            </Row>
          </div>
        </div>
        <Footer className="text-center text-white">
          <DarkDiv className="text-center text-dark p-5">
            <H5>ABOUT US</H5>
            <p className="my-4 w-50 d-flex mx-auto">
              Merhaba, biz Alanya Alaaddin Keykubat Üniversitesi 3.Sınıf
              bilgisayar mühendisliği öğrencileri Sepehr Latifi Azad, Mustafa
              Eser, Faruk Özgür, Neslihan Arıkan. Ders çalışırken odaklanma
              sürenizi ölçebileceğiniz ve notlarınızı düzenli şekilde
              saklayabileceğiniz bir site yapmaya çalıştık. Umarım faydalı olur
              ve keyifle kullanırsınız :)
            </p>
          </DarkDiv>
          <LinkContainer className="pt-1">
            <section>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/sepehrlatifiazad?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bgo8NieQzSKuFyuelLPppRw%3D%3D"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <BsLinkedin />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/mustafa-eser-?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh2Hysuw8Qrij5ELo7g%2FPQA%3D%3D"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <BsLinkedin />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/farukozgur?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIbx0PvJQTASDDobuAEOxuw%3D%3D"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <BsLinkedin />
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.linkedin.com/in/neslihan-ar%C4%B1kan-414681232?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEwGZ38VgS6SJS6aL43fkdg%3D%3D"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <BsLinkedin />
              </a>
            </section>
          </LinkContainer>
        </Footer>
      </ProfileContainer>
    </>
  );
}

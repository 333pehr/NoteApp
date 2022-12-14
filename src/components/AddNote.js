import styled from "styled-components";
import { BiPencil, BiChevronDown } from "react-icons/bi";
import { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "react-bootstrap";

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #f5f5f5;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.open ? "800px" : "70px")};
  transition: height 0.5s;
  position: relative;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 95%;
  justify-content: space-between;
  user-select: none;
  transition: 500ms;
  div {
    display: flex;
    align-items: center;
  }
  h3 {
    transition: 500ms;
  }
  h3:hover {
    text-decoration: underline;
    user-select: none;
    text-color: #000000;
  }
  margin: 0 auto;
`;
const DropContainer = styled.div`
  rotate: ${(props) => (props.open ? "180deg" : "0deg")};
  transition: rotate 0.5s;
`;
const EditorContainer = styled.div`
  display: flex;
  scale: ${(props) => !props.open && "0"};
  width: 95%;
  flex-direction: column;
  transition: scale 0.5s;
  margin: 0 auto;
  margin-top: 0.5rem;
`;
const TitleInput = styled.div`
  display: flex;
  margin: 1rem auto;
  scale: ${(props) => !props.open && "0"};
  width: 95%;
  transition: scale 0.5s;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  margin-left: 55px;
  display: flex;
  align-items: center;
  width: 180px;
  justify-content: space-between;
`;

const ColorContainer = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  margin: 25px;
  li {
    background-color: black;
    margin-left: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #9e9e9e;
    padding: 2px;
  }
  li:nth-child(1) {
    background-color: #8ac3a3;
    margin-left: 0px;
  }
  li:nth-child(2) {
    background-color: #87baf5;
  }
  li:nth-child(4) {
    background-color: #f0864a;
  }
  li:nth-child(3) {
    background-color: #aa87f5;
  }
  li:nth-child(5) {
    background-color: #c2185b;
  }
  li:hover {
    border: 2px solid #000000;
  }
`;

export default function AddNote() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [Color, setColor] = useState("#8ac3a3");
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Container open={open}>
        <Row
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div>
            <BiPencil fontSize={"25"} />
            <h3 className="pl-4">Write New Note</h3>
          </div>
          <DropContainer open={open}>
            <BiChevronDown fontSize={"45"} />
          </DropContainer>
        </Row>
        <TitleInput open={open}>
          <Input
            type="text"
            placeholder="Title of the note"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </TitleInput>
        <EditorContainer open={open}>
          <Editor
            className="duration-500"
            apiKey="6s0oikvck6f3ixgzocx2vjggjyq078smmj7q2hend8p9mvn8"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              menubar: false,
              object_resizing: false,
              resize: false,
              height: 500,
              menubar: false,
              toolbar:
                "undo redo | casechange blocks | bold italic backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist checklist outdent indent | removeformat | a11ycheck code table",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <div>
            <ColorContainer>
              <li
                onClick={() => {
                  setColor("#8ac3a3");
                }}
              ></li>
              <li
                onClick={() => {
                  setColor("#87baf5");
                }}
              ></li>
              <li
                onClick={() => {
                  setColor("#aa87f5");
                }}
              ></li>
              <li
                onClick={() => {
                  setColor("#f0864a");
                }}
              ></li>
              <li
                onClick={() => {
                  setColor("#c2185b");
                }}
              ></li>
            </ColorContainer>
          </div>
          <ButtonContainer>
            <Button variant="primary" size="lg">
              Save
            </Button>
            <Button variant="primary" size="lg">
              Close
            </Button>
          </ButtonContainer>
        </EditorContainer>
      </Container>
    </>
  );
}

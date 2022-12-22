import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import {
  BiPencil,
  BiTrash,
  BiShare,
  BiExit,
  BiLinkExternal,
} from "react-icons/bi";
import { db } from "../firebase-config";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const WidgetContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;
const Widget = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
  width: 70%;
  margin: 50px auto;
  border-radius: 10px;
  border: 2px solid black;
  padding: 2rem 0.5rem;
  height: 90vh;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 0px;
  width: 100%;
  justify-content: space-evenly;
  button {
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }
`;
const NoteContainer = styled.div`
  overflow-y: scroll;
  height: 80%;
  padding: 0 1rem;
  @media (max-width: 768px) {
    height: 70%;
  }
`;
const EditorContainer = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  transition: scale 0.5s;
  margin: 0 auto;
  margin-top: 0.5rem;
`;
const TitleInput = styled.div`
  display: flex;
  margin: 1rem auto;
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
  margin-top: 10px;
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
  li:nth-child(1):active {
    border: 2px solid #000000;
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

const LinkGenerator = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  a {
    display: flex;
    align-items: center;
    margin: 0px auto;
  }
`;
export default function NoteDetails(props) {
  const [notes, setNotes] = useState([]);
  const currentUser = localStorage.getItem("uid");
  const [OpenEditor, setOpenEditor] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [Color, setColor] = useState(props.color);
  const [editorNote, setEditorNote] = useState(props.note);
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const [isShared, setIsShared] = useState(false);
  const editorRef = useRef(null);
  const ShareNote = async () => {
    let time = new Date();
    setDoc(doc(db, "sharedNotes", props.id), {
      title: title,
      note: props.note,
      date: Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(time),
      createduserID: currentUser,
    }).then(() => {
      setIsShared(true);
    });
  };
  const getNotes = async () => {
    const docRef = doc(db, "notes", currentUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setNotes(docSnap.data().notes);
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    getNotes();
  }, []);
  const noteEdit = async () => {
    let note = notes.filter((note) => note.id === props.id);
    let updatedNotes = notes.filter((note) => note.id !== props.id);
    note[0].title = title;
    note[0].note = editorRef.current.getContent();
    note[0].color = Color;
    note[0].isFavorite = isFavorite;
    const docRef = doc(db, "notes", currentUser);
    updatedNotes.push(note[0]);
    await updateDoc(docRef, {
      notes: updatedNotes,
    });
    props.close();
  };

  const noteDelete = async (noteID) => {
    let Newnotes = notes.filter((note) => note.id !== noteID);
    const docRef = doc(db, "notes", currentUser);
    await updateDoc(docRef, {
      notes: Newnotes,
    });
    props.close();
  };
  return (
    <WidgetContainer>
      <Widget>
        {OpenEditor ? (
          <>
            <TitleInput>
              <Input
                type="text"
                placeholder="Title of the note"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </TitleInput>
            <EditorContainer>
              <Editor
                className="duration-500"
                apiKey="6s0oikvck6f3ixgzocx2vjggjyq078smmj7q2hend8p9mvn8"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={editorNote}
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
                onChange={(e) => {
                  setEditorNote(e.target.getContent());
                }}
              />
              <div className="d-flex items-center">
                <h5 className="mr-2">Color: </h5>
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
              <div className="d-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-3"
                  onClick={(e) => {
                    setIsFavorite(e.target.checked);
                  }}
                  defaultValue={isFavorite}
                />
                <div className="text-lg">Add to favourite</div>
              </div>
              <ButtonContainer>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setTitle("");
                    setEditorNote("");
                    setIsFavorite(false);
                    setColor("#8ac3a3");
                    setOpenEditor(false);
                    noteEdit();
                    props.close();
                    props.updater();
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setOpenEditor(false);
                  }}
                >
                  Close
                </Button>
              </ButtonContainer>
            </EditorContainer>
          </>
        ) : (
          <>
            <h1 className="text-center mb-5">{props.title}</h1>
            <NoteContainer>
              <span dangerouslySetInnerHTML={{ __html: props.note }}></span>
            </NoteContainer>
            {isShared ? (
              <LinkGenerator>
                <Link to={"/shared/" + props.id + "/"}>
                  <BiLinkExternal className="mr-1" />
                  {"localhost:3000/shared/" + props.id + "/"}
                </Link>
              </LinkGenerator>
            ) : null}
            <ButtonHolder>
              <button
                onClick={props.close}
                className="d-flex items-center bg-black border text-white"
              >
                <BiExit className="mr-1" />
                Close
              </button>
              <button
                onClick={() => {
                  noteDelete(props.id).then(() => {
                    props.updater();
                  });
                }}
                className="d-flex items-center bg-red-500 border rounded-lg text-white"
              >
                <BiTrash className="mr-1 " /> Delete
              </button>
              <button
                onClick={() => {
                  setOpenEditor(true);
                }}
                className="d-flex items-center bg-yellow-500 border rounded-lg text-white"
              >
                <BiPencil className="mr-1" />
                Edit
              </button>
              <button
                onClick={() => {
                  ShareNote();
                }}
                className="d-flex items-center bg-blue-500 border rounded-lg text-white"
              >
                <BiShare className="mr-1" /> Share
              </button>
            </ButtonHolder>
          </>
        )}
      </Widget>
    </WidgetContainer>
  );
}

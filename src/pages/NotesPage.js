import styled from "styled-components";
import AddNote from "../components/AddNote";
import NoteCard from "../components/Cards";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const Container = styled.div`
  width: 95%;
  display: flex;
  margin: 0 auto;
  background-color: #ffffff;
  margin-bottom: 2rem;
  margin-top: 3rem;
  flex-grow: 1;
  flex-wrap: wrap;
  min-height: 75vh;
`;
const NewNote = styled.div`
  width: 95%;
  display: flex;
  margin: 0 auto;
  margin-top: 3rem;
`;
const Row = styled.div`
  padding: 2rem 5rem;
  display: flex;
  width: 100%;
`;

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const getUserUID = async () => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
  };
  useEffect(() => {
    getUserUID();
  }, []);

  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);
      const notesRef = doc(db, "notes", currentUser.uid);
      const docSnap = await getDoc(notesRef);
      if (docSnap.exists()) {
        console.log("Document data:");
        setNotes(docSnap.data().notes.reverse());
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    };
    getNotes();
  }, [currentUser.uid]);

  return (
    <>
      <div className="w-full">
        <NewNote>
          <AddNote />
        </NewNote>
        <Container>
          <Row className="row">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              notes.map((note) => (
                <NoteCard
                  key={note}
                  title={note.title}
                  note={note.note}
                  isFavourite={note.isFavourite}
                  color={note.color}
                  date={note.date}
                />
              ))
            )}
          </Row>
          {/*<!-- End row -->*/}
        </Container>
      </div>
    </>
  );
}

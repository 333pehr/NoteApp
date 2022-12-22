import styled from "styled-components";
import AddNote from "../components/AddNote";
import NoteCard from "../components/Cards";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";

const Container = styled.div`
  width: 95%;
  display: flex;
  margin: 0 auto;
  background-color: #ffffff;
  margin-bottom: 2rem;
  margin-top: 3rem;
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

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
  }
`;

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentUser = localStorage.getItem("uid");

  const getUpdatedNotes = () => {
    console.log("updated");
    setTimeout(() => {
      getNotes();
    }, 1000);
  };
  //sharing data between components using callback function
  const getUUID = (UUID) => {
    console.log(UUID);
  };
  const getNotes = async () => {
    setLoading(true);
    const notesRef = doc(db, "notes", currentUser);
    const docSnap = await getDoc(notesRef);
    if (docSnap.exists()) {
      setNotes(docSnap.data().notes.reverse());
    } else {
      console.log("No such document!");
    }
    setLoading(false);
  };
  useEffect(() => {
    getNotes();
  }, [currentUser]);

  return (
    <>
      <div className="w-full">
        <NewNote>
          <AddNote
            notes={notes}
            currentUser={currentUser}
            updater={getUpdatedNotes}
          />
        </NewNote>
        <Container>
          <Row className="row">
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              notes.map((note) => (
                <NoteCard
                  key={note.id}
                  title={note.title}
                  note={note.note}
                  isFavourite={note.isFavourite}
                  color={note.color}
                  date={note.date}
                  getUUID={getUUID}
                  UUID={note.id}
                  updater={getUpdatedNotes}
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

import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import NoteCard from "../components/Cards";
import styled from "styled-components";

const Row = styled.div`
  padding: 2rem 5rem;
  width: 100%;
  display: flex;
  margin: 0 auto;
  background-color: white;
  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 2rem 1rem;
    align-items: center;
  }
`;
const Container = styled.div`
  width: 95%;
  display: flex;
  margin: 0 auto;
  background-color: ;
  margin-bottom: 2rem;
  margin-top: 3rem;
  flex-grow: 1;
  flex-wrap: wrap;
  min-height: 75vh;
  height: auto;
`;
export default function FavouriteNotes() {
  const [loading, setLoading] = useState(false);
  const currentUser = localStorage.getItem("uid");
  const getUUID = (UUID) => {
    console.log(UUID);
  };
  //getting doc from firebase and storing it in state
  const [notes, setnotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);
      const notesRef = doc(db, "notes", currentUser);
      const docSnap = await getDoc(notesRef);
      if (docSnap.exists()) {
        let temp = docSnap.data().notes.reverse();
        let favNotes = temp.filter((note) => note.isFavorite === true);
        setnotes(favNotes);
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    };
    getNotes();
  }, []);
  return (
    <>
      <div>
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

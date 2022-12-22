import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { getDoc, doc } from "firebase/firestore";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const ShareContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f5;
`;
export default function SharedNotes() {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(false);
  const getNotes = async () => {
    setLoading(true);
    const notesRef = doc(db, "sharedNotes", id);
    const docSnap = await getDoc(notesRef);
    if (docSnap.exists()) {
      setNote(docSnap.data());
    } else {
      console.log("No such document!");
    }
    setLoading(false);
  };
  useEffect(() => {
    getNotes();
  }, [id]);
  return (
    <>
      <ShareContainer>
        <Container>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <>
              <h1 className="text-center m-5">{note.title}</h1>
              <span dangerouslySetInnerHTML={{ __html: note.note }}></span>
            </>
          )}
        </Container>
      </ShareContainer>
    </>
  );
}

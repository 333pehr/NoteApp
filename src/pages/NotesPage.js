import styled from "styled-components";
import AddNote from "../components/AddNote";
import NoteCard from "../components/Cards";

const Container = styled.div`
  width: 95%;
  display: flex;
  margin: 0 auto;
  background-color: #ffffff;
  margin-bottom: 2rem;
  margin-top: 3rem;
  flex-grow: 1;
  flex-wrap: wrap;
`;
const NewNote = styled.div`
  width: 95%;
  display: flex;
  margin: 0 auto;
  margin-top: 3rem;
`;
const Row = styled.div`
  padding: 2rem 5rem;
`;
export default function NotesPage() {
  return (
    <>
      <NewNote>
        <AddNote />
      </NewNote>
      <Container>
        <Row className="row">
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#A75C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
          <NoteCard color={"#F57C00"} />
        </Row>
        {/*<!-- End row -->*/}
      </Container>
    </>
  );
}

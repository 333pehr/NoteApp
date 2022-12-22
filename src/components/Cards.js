import {
  BiDotsHorizontalRounded,
  BiPencil,
  BiTrash,
  BiShare,
} from "react-icons/bi";
import { useState, useEffect } from "react";
import styled from "styled-components";
import NoteDetails from "./NoteDetails";

const Menu = styled.ul`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 150px;
  li {
    list-style: none;
    background-color: #f5f5f5;
    padding: 4px 10px;
    width: 100%;
    text-align: center;
    user-select: none;
  }
  li:hover {
    background-color: #e5e5e5;
  }
`;
const Cardheader = styled.div`
  position: relative;
  padding: 10px 0px;
`;
const CardFooter = styled.div`
  padding: 7px 0px;
`;
const Card = styled.div`
  border: 0;
  border-bottom: 5px solid ${(props) => props.Color};
  margin: 10px;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 10px 0px;
  }
`;
export default function NoteCard(props) {
  const [open, setopen] = useState(false);
  const [note, setnote] = useState("");
  const close = () => {
    setOpenDetails(false);
  };
  const [openDetails, setOpenDetails] = useState(false);
  useEffect(() => {
    setnote(props.note.slice(0, 100));
  }, [props.note]);
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <Card className="card" Color={props.color}>
          <Cardheader>
            <BiDotsHorizontalRounded
              className="cursor-pointer absolute right-5 text-xl"
              onClick={() => {
                setopen(!open);
              }}
            />
            {/* {open ? (
              <Menu className="fixed">
                <li>
                  <div className="flex items-center">
                    <BiPencil />
                    <span className="pl-2">Edit</span>
                  </div>
                </li>
                <li onClick={props.getUUID(props.UUID)}>
                  <div className="flex items-center">
                    <BiTrash />
                    <span className="pl-2">Delete</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <BiShare />
                    <span className="pl-2">Share</span>
                  </div>
                </li>
              </Menu>
            ) : (
              <></>
            )}
            */}
          </Cardheader>
          <div
            className="card-body"
            onClick={() => {
              setOpenDetails(true);
            }}
          >
            <h5 className="select-none">{props.title}</h5>
            <p
              dangerouslySetInnerHTML={{ __html: note }}
              className="select-none"
            ></p>
          </div>
          <CardFooter className="text-muted select-none">
            &nbsp;&nbsp; &nbsp; {props.date}
          </CardFooter>
        </Card>
      </div>
      {openDetails ? (
        <NoteDetails
          title={props.title}
          date={props.date}
          note={props.note}
          close={close}
          id={props.UUID}
          updater={props.updater}
          isFavourite={props.isFavourite}
          color={props.color}
        />
      ) : (
        <></>
      )}
    </>
  );
}

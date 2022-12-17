import {
  BiDotsHorizontalRounded,
  BiPencil,
  BiTrash,
  BiShare,
} from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;
export default function NoteCard(props) {
  const [open, setopen] = useState(false);
  const [note, setnote] = useState("");
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
            {open ? (
              <Menu className="fixed">
                <li>
                  <Link className="dropdown-item">
                    <div className="flex items-center">
                      <BiPencil />
                      <span className="pl-2">Edit</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <div className="flex items-center">
                      <BiTrash />
                      <span className="pl-2">Delete</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    <div className="flex items-center">
                      <BiShare />
                      <span className="pl-2">Share</span>
                    </div>
                  </Link>
                </li>
              </Menu>
            ) : (
              <></>
            )}
          </Cardheader>
          <div className="card-body">
            <h5>{props.title}</h5>
            <p>{note}...</p>
          </div>
          <CardFooter className="text-muted">
            &nbsp;&nbsp; &nbsp; {props.date}
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

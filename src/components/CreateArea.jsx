import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      // if (name === "title") {
      //   return { title: value, content: prevValue.content };
      // } else if (name === "content") {
      //   return { title: prevValue.title, content: value };
      // }
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });

    event.preventDefault();
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    // <form onSubmit={submitNote}>
    <form className="create-note">
      {/* {isExpanded ? (
        <input
          onClick={expand}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
      ) : null} */}
      {isExpanded && (
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
      )}
      <textarea
        onClick={expand}
        onChange={handleChange}
        name="content"
        placeholder="Content"
        rows={isExpanded ? "3" : "1"}
        value={note.content}
      />
      {/* <button type="submit">Add</button> */}
      <Zoom in={isExpanded ? true : false}>
        <Fab type="submit" onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}

export default CreateArea;

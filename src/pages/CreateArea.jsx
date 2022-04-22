import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    amountSaved: "",
    startDate: "",
    savingsDateGoal: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(event) {
    onAdd(note);
    setNote({
      title: "",
      content: "",
      amountSaved: "",
      savingsDateGoal: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <div>
          <TextField 
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            focused
          />
          </div>
        )}
        {isExpanded && (
          <div>
          <TextField
            sx={{borderColor:"red"}}
            value={note.targetAmount}
            type="text"
            placeholder="Target Savings Amount"
            name="targetAmount"
            onChange={handleChange}
            focused
          />
          </div>
        )}
        {isExpanded && (
          <div>
          <TextField
            value={note.amountSaved}
            type="text"
            placeholder="Amount Saved"
            name="amountSaved"
            onChange={handleChange}
            focused
          />
           </div>
          )}
          {isExpanded && (
            <div>
            <TextField
              value={note.startDate}
              type="text"
              placeholder="Goal Start Date"
              name="startDate"
              onChange={handleChange}
              focused
            />
            </div>
          )}
          {isExpanded && (
            <TextField
              value={note.savingsDateGoal}
              type="text"
              placeholder="Goal End Date"
              name="savingsDateGoal"
              onChange={handleChange}
              focused
            />
          )}

        <p>
          <TextField
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Create a goal..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
            focused
          ></TextField>
        </p>
        <Button variant="contained" onClick={submitButton}>
          <IoIosAdd size={35} />
        </Button>
        </form>
    </div>
  );
}

export default CreateArea;
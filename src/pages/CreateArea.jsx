import React, { useState } from "react";

import { IoIosAdd } from "react-icons/io";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    amountSaved: "",
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
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          </div>
        )}
        {isExpanded && (
          <div>
          <input
            value={note.targetAmount}
            type="text"
            placeholder="Target Savings Amount"
            name="targetAmount"
            onChange={handleChange}
          />
          </div>
        )}
        {isExpanded && (
          <div>
          <input
            value={note.amountSaved}
            type="text"
            placeholder="Amount Saved"
            name="amountSaved"
            onChange={handleChange}
          />
           </div>
        )}
        {isExpanded && (
          <input
            value={note.savingsDateGoal}
            type="text"
            placeholder="Savings Date Goal"
            name="savingsDateGoal"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Create a goal..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button onClick={submitButton}>
          <IoIosAdd size={35} />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
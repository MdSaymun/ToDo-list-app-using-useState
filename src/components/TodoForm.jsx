import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
        name="text"
        className="todo-input"
        ref={inputRef}
      />
      <button onClick={handleSubmit} className="todo-button">
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

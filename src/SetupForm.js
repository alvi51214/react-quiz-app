import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form className="setup-form">
        <h2>setup form</h2>
        {/* amount */}
        <div className="form-control">
          <label htmlFor="number of questions">number of questions</label>
          <input
            type="number"
            name="amount"
            id=""
            className="form-input"
            min={1}
            max={50}
            value={quiz.amount}
            onChange={handleChange}
          />
        </div>
        {/* category */}
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select
            name="category"
            id=""
            className="form-input"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>
        {/* difficulty */}
        <div className="form-control">
          <label htmlFor="number of questions">select difficulty</label>
          <select
            name="difficulty"
            id=""
            className="form-input"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
      </form>
      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        Start
      </button>
    </section>
  );
};

export default SetupForm;

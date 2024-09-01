import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    isLoading,
    index,
    correct,
    questions,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
          {answers.map((answer, index) => {
            return (
              <button
                className="answer-btn"
                key={index}
                dangerouslySetInnerHTML={{ __html: answer }}
                onClick={() => {
                  checkAnswer(correct_answer === answer);
                }}
              ></button>
            );
          })}
          <button className="next-question" onClick={() => nextQuestion()}>
            next question
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;

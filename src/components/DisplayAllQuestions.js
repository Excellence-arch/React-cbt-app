import React from 'react'

const DisplayAllQuestions = ({allQuestions}) => {
  return (
    <div className="container text-center">
      {allQuestions.map((val, i) => (
        <div key={i}>
          <p>{val.question}</p>
          <p>
            <span>A. {val.optionA}</span>
            <span> B. {val.optionB}</span>
            <span> C. {val.optionC}</span>
            <span> D. {val.optionD}</span>
          </p>
          <p>Ans: {val.correctOption}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayAllQuestions;
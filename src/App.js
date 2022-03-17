import AddQuestion from "./components/AddQuestion";
import { useState } from 'react';
import DisplayQuestions from "./components/DisplayQuestions";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {

  const [allQuestions, setAllQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(false);

  const addQuestions = (newQuestion) => {
    setAllQuestions([...allQuestions, newQuestion]);
    // console.log(allQuestions);
  }

  const submit = (scores) => {
    let newScore = scores.reduce((i, j) => i + j, 0);
    setScore(newScore);
    setDisplayScore(true);
  }

  return(
    <>
      <section className="container-fluid">
        <div className="row">
          <div className="col-6 border border-right">
            <AddQuestion addQuestions={addQuestions}/>
          </div>
          {!displayScore ?
            <div className="col-6">
              <DisplayQuestions allQuestions={allQuestions} submit={submit}/>
            </div>
          :
            <div className="col-6">
              <ScoreBoard score={score} total={allQuestions.length}/>
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default App
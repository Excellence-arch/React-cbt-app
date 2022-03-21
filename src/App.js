import AddQuestion from "./components/AddQuestion";
import { useState } from 'react';
import DisplayQuestions from "./components/DisplayQuestions";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {

  const [allQuestions, setAllQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [ready, setReady] = useState(false);
  const [displayScore, setDisplayScore] = useState(false);

  const addQuestions = (newQuestion) => {
    setAllQuestions([...allQuestions, newQuestion]);
  }

  const submit = (scores) => {
    // setAllScore(scores);
    let newScore = scores.reduce((i, j) => i + j, 0);
    setScore(newScore);
    setReady(false);
    setDisplayScore(true);
  }

  const realReady = (gets) => {
    setReady(gets);
    setDisplayScore(false);
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
              <DisplayQuestions allQuestions={allQuestions} ready={ready} realReady={realReady} submit={submit}/>
            </div>
          :
            <div className="col-6">
              <ScoreBoard score={score} total={allQuestions.length} realReady={realReady}/>
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default App
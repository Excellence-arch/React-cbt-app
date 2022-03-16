import AddQuestion from "./components/AddQuestion";
import { useState } from 'react';
import DisplayQuestions from "./components/DisplayQuestions";

const App = () => {

  const [allQuestions, setAllQuestions] = useState([]);

  const addQuestions = (newQuestion) => {
    setAllQuestions([...allQuestions, newQuestion]);
    console.log(allQuestions);
  }

  return(
    <>
      <section className="container-fluid">
        <div className="row">
          <div className="col-6 border border-right">
            <AddQuestion addQuestions={addQuestions}/>
          </div>
          <div className="col-6">
            <DisplayQuestions allQuestions={allQuestions}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
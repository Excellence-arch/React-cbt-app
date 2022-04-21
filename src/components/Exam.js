import Buttons from "./Buttons";
import Options from "./Options";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Exam = ({allQuestions, submitAnswers}) => {

    const {id} = useParams();

    const [cur, setCur] = useState(0);
    const [chosen, setChosen] = useState([]);

    const submits = () => {
        submitAnswers(chosen, id);
        // console.log(id);
    }

    const checkAns = (e) => {
        let newChosen = chosen;
        if (e.target.value == allQuestions[cur].correctOption) {
            newChosen[cur] = 1;
        } else {
            newChosen[cur] = 0;
        }
        console.log(newChosen);
        // setChosen(newChosen);
    }

    const next = () => {
        let curr = cur;
        curr++;
        setCur(curr);
    }

    const previous = () => {
        let curr = cur;
        curr--;
        setCur(curr);
    }

  return (
    <>
        <section className="container-fluid">
            <div className="row">
                <div className="container-fluid col-6 ext-center">
                    { allQuestions.length !== 0 ?
                        <div key={cur} >
                            <p>Question {cur + 1}</p>
                            <p>{allQuestions[cur].question}</p>
                            <p>
                                <Options change={e => checkAns(e)} vals={allQuestions[cur].optionA} name={`question${cur}`}/> {allQuestions[cur].optionA}
                            </p>
                            <p>
                                <Options change={e => checkAns(e)} vals={allQuestions[cur].optionB} name={`question${cur}`}/> {allQuestions[cur].optionB}
                            </p>
                            <p>
                                <Options change={e => checkAns(e)} vals={allQuestions[cur].optionC} name={`question${cur}`}/> {allQuestions[cur].optionC}
                            </p>
                            <p>
                                <Options change={e => checkAns(e)} vals={allQuestions[cur].optionD} name={`question${cur}`}/> {allQuestions[cur].optionD}
                            </p>
                            {cur == 0 && allQuestions.length !== 1 ? 
                            <p>
                                <Buttons name="Submit" handle={submits} color="info"/>
                                <Buttons name="Next" handle={next} color="info"/>
                            </p>
                            :
                            cur == allQuestions.length-1 && allQuestions.length !== 1 ?
                            <p>
                                <Buttons name="Previous" handle={previous} color="info"/>
                                <Buttons name="Submit" handle={submits} color="info"/>
                            </p>
                            :
                            allQuestions.length == 1 ?
                            <p>
                                <Buttons name="Submit" handle={submits} color="info"/>
                            </p>
                            :
                            <p>
                                <Buttons name="Previous" handle={previous} color="info"/>
                                <Buttons name="Submit" color="info" handle={submits} />
                                <Buttons name="Next" handle={next} color="info"/>
                            </p>
                            }
                        </div>
                        :
                        <div className="text-center">
                            Questions are not yet available <br /> Please check again later. <br />Thank you.
                        </div>
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Exam;
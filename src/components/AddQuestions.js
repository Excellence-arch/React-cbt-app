import { useState } from 'react';
import Buttons from "./Buttons";
import Input from "./Input";
import Options from './Options';


const AddQuestions = ({addNewQuestion}) => {

    const [question, setQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [correctOption, setCorrectOption] = useState("");

    const submitQuestion = () => {
        addNewQuestion({question, optionA, optionB, optionC, optionD, correctOption});
        setQuestion("");
        setOptionA("");
        setOptionB("");
        setOptionC("");
        setOptionD("");
    }
    
  return (
    <>
        <section className="container-fluid">
            <div className="row">
                <div className="col-6 text-center border rounded container-fluid">
                    <Input placeholder="Question" change={(e) => setQuestion(e.target.value)} vals={question}/>
                    <Input placeholder="Option A" change={(e) => setOptionA(e.target.value)} vals={optionA}/>
                    <Options name="correct" vals={optionA} change={(e)=> setCorrectOption(e.target.value)}/>
                    <Input placeholder="Option B"change={(e) => setOptionB(e.target.value)} vals={optionB}/>
                    <Options name="correct" vals={optionB} change={(e)=> setCorrectOption(e.target.value)}/>
                    <Input placeholder="Option C" change={(e) => setOptionC(e.target.value)} vals={optionC}/>
                    <Options name="correct" vals={optionC} change={(e)=> setCorrectOption(e.target.value)}/>
                    <Input placeholder="Option D" change={(e) => setOptionD(e.target.value)} vals={optionD}/>
                    <Options name="correct" vals={optionD} change={(e)=> setCorrectOption(e.target.value)}/> <br />
                    <Buttons name="Add Question" handle={submitQuestion} color="danger" />
                </div>
            </div>
        </section>
    </>
  )
}

export default AddQuestions;
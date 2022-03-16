import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

const AddQuestion = ({addQuestions}) => {

    const [question, setQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");


    return(
        <>
            <Input placeholder="Question" handleChange={e => setQuestion(e.target.value)} val={question}/>
            <Input placeholder="Option A" handleChange={e => setOptionA(e.target.value)} val={optionA}/>
            <Input placeholder="Option B" handleChange={e => setOptionB(e.target.value)} val={optionB}/>
            <Input placeholder="Option C" handleChange={e => setOptionC(e.target.value)} val={optionC}/>
            <Input placeholder="Option D" handleChange={e => setOptionD(e.target.value)} val={optionD}/>
            <Button name="Add Question" addQuestions={()=> addQuestions({question, optionA, optionB, optionC, optionD})} color="info"/>
        </>
    )
}

export default AddQuestion;
import Button from "./Button";
import Input from "./Input";
import Options from "./Options"
import { useState } from "react";

const AddQuestion = ({addQuestions}) => {

    const [question, setQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [correctOption, setCorrectOption] = useState("");


    const setAdd = () => {
        if(question !== "" && optionA !== "" && optionB !== "" && optionC !== "" && optionD !== "") {
            addQuestions({question, optionA, optionB, optionC, optionD, correctOption});
            setQuestion("");
            setOptionA("");
            setOptionB("");
            setOptionC("");
            setOptionD("");
            setCorrectOption("");
        } else{
            alert("Please enter your question, options and answer");
        }
    }

    return(
        <>
            <Input placeholder="Question" handleChange={e => setQuestion(e.target.value)} val={question}/>
            <Input placeholder="Option A" handleChange={e => setOptionA(e.target.value)} val={optionA}/> <Options handleSelect={e => setCorrectOption(e.target.value)} names={`correct`} val={`Option A`}/>
            <Input placeholder="Option B" handleChange={e => setOptionB(e.target.value)} val={optionB}/> <Options names={`correct`} handleSelect={e => setCorrectOption(e.target.value)} val={`Option B`}/>
            <Input placeholder="Option C" handleChange={e => setOptionC(e.target.value)} val={optionC}/> <Options names={`correct`} handleSelect={e => setCorrectOption(e.target.value)} val={`Option C`}/>
            <Input placeholder="Option D" handleChange={e => setOptionD(e.target.value)} val={optionD}/> <Options names={`correct`} handleSelect={e => setCorrectOption(e.target.value)} val={`Option D`}/>
            <Button name="Add Question" addQuestions={setAdd} color="info"/>

        </>
    )
}

export default AddQuestion;
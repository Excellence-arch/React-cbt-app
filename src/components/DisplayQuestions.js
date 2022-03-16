import { useState } from 'react';
import Button from './Button';
import Options from './Options';

const DisplayQuestions = ({allQuestions}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [ready, setReady] = useState(false);

    const previous = () => {
        let current = currentQuestion;
        current--;
        setCurrentQuestion(current);
    }

    const next = () => {
        let current = currentQuestion;
        current++;
        setCurrentQuestion(current);
    }

    const submit = () => {

    }
    
    return(
        <>
            {allQuestions.length > 0 ?
            !ready ? 
            <div>
                <Button name="Start Exam" color="danger" addQuestions={() => setReady(true)} />
            </div>
            :
            <div key={currentQuestion}>
                <p>Question {currentQuestion+1}</p>
                <p>{allQuestions[currentQuestion].question}</p>
                <Options name={"Option"+ currentQuestion} value={allQuestions[currentQuestion].optionA} />
                <Options name={"Option"+ currentQuestion} value={allQuestions[currentQuestion].optionB} />
                <Options name={"Option"+ currentQuestion} value={allQuestions[currentQuestion].optionC} />
                <Options name={"Option"+ currentQuestion} value={allQuestions[currentQuestion].optionD} />
                {/* <p>{allQuestions[currentQuestion].optionA}</p> */}
                {/* <p>{allQuestions[currentQuestion].optionB}</p>
                <p>{allQuestions[currentQuestion].optionC}</p>
                <p>{allQuestions[currentQuestion].optionD}</p> */}
                {currentQuestion == allQuestions.length - 1 ? 
                <div>
                    <Button name="previous" color='info' addQuestions={previous} />
                    <Button name="Submit" color="success" addQuestions={submit} />
                </div>
                :
                currentQuestion == 0 ?

                <div>
                    <Button name="Submit" color="success" addQuestions={submit} />
                    <Button name="Next" color="info" addQuestions={next} />
                </div>
                :
                    <div>
                        <Button name="previous" color='info' addQuestions={previous} />
                        <Button name="Submit" color="success" addQuestions={submit} />
                        <Button name="Next" color="info" addQuestions={next} />
                    </div>
            }
            </div>
            :
            <h3>There are no current Questions</h3>
            }
        </>
    )
}

export default DisplayQuestions
import { useState } from 'react';
import Button from './Button';
import Options from './Options';

const DisplayQuestions = ({allQuestions, submit}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [ready, setReady] = useState(false);
    const [scores, setScores] = useState([]);

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

    const checkAnswer = e => {
        let newScore = scores;
        if (e.target.value == allQuestions[currentQuestion].correctOption) {
            newScore[currentQuestion] = 1;
            setScores(newScore);
            console.log(scores);
        } else {
            newScore[currentQuestion] = 0;
            setScores(newScore);
            console.log(scores);
        }
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
                <p> <Options names={`Option${currentQuestion}`} handleSelect={e => checkAnswer(e)} val={`Option A`} />  {allQuestions[currentQuestion].optionA} </p>
                <p> <Options names={`Option${currentQuestion}`} handleSelect={e => checkAnswer(e)} val={`Option B`} />  {allQuestions[currentQuestion].optionB} </p>
                <p> <Options names={`Option${currentQuestion}`} handleSelect={e => checkAnswer(e)} val={`Option C`} />  {allQuestions[currentQuestion].optionC} </p>
                <p> <Options names={`Option${currentQuestion}`} handleSelect={e => checkAnswer(e)} val={`Option D`} />   {allQuestions[currentQuestion].optionD}</p>
                {/* <p>{allQuestions[currentQuestion].optionA}</p> */}
                {/* <p>{allQuestions[currentQuestion].optionB}</p>
                <p>{allQuestions[currentQuestion].optionC}</p>
                <p>{allQuestions[currentQuestion].optionD}</p> */}
                {currentQuestion == allQuestions.length - 1 ? 
                <div>
                    <Button name="previous" color='info' addQuestions={previous} />
                    <Button name="Submit" color="success" addQuestions={() => submit(scores)} />
                </div>
                :
                currentQuestion == 0 ?

                <div>
                    <Button name="Submit" color="success" addQuestions={() => submit(scores)} />
                    <Button name="Next" color="info" addQuestions={next} />
                </div>
                :
                    <div>
                        <Button name="previous" color='info' addQuestions={previous} />
                        <Button name="Submit" color="success" addQuestions={() => submit(scores)} />
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
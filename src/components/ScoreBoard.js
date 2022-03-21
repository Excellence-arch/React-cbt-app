import Button from "./Button"

const ScoreBoard = ({score, total, realReady}) => {
    return(
        <>
            <div className="text-center">
                You scored {score} out of {total}
                <p><Button color="info" name="Take Exam" addQuestions={() => realReady(true)}/></p>
            </div>
        </>
    )
}

export default ScoreBoard;
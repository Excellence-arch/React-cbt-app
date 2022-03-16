const DisplayQuestions = ({allQuestions}) => {
    
    return(
        <>
            {allQuestions.map((val, i)=> (
                <div key={i}>
                    <p>{val.question}</p>
                    <p>{val.optionA}</p>
                    <p>{val.optionB}</p>
                    <p>{val.optionC}</p>
                    <p>{val.optionD}</p>

                </div>
            ))}
        </>
    )
}

export default DisplayQuestions
const Button = ({name, color, addQuestions}) => {
    return(
        <>
            <button className={"btn-"+color+" btn"} onClick={addQuestions} >{name}</button>
        </>
    )
}

export default Button;
const Options = ({name, value}) => {
    return(
        <>
            <input type="radio" name={name} value={value}/>
        </>
    )
}

export default Options;
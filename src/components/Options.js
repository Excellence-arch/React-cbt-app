const Options = ({names, val, handleSelect}) => {
    return(
        <>
            <input type="radio" name={names} onChange={handleSelect} value={val} />
        </>
    )
}

export default Options;
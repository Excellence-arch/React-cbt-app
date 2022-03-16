
const Input = ({placeholder, handleChange, val}) => {

    return(
        <>
            <input type="text" className="form-control my-2" placeholder={placeholder} onChange={handleChange} value={val}/>
        </>
    )
}

export default Input

const Options = ({name, change, vals}) => {
  return (
    <>
        <input type="radio" name={name} onChange={change} value={vals}/>
    </>
  )
}

export default Options;
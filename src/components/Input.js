
const Input = ({change, vals, placeholder, types}) => {
  return (
    <>
        <input type={types} placeholder={placeholder} onChange={change} value={vals} className="my-2 form-control"/>
    </>
  )
}

export default Input;
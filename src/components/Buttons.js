
const Buttons = ({name, color, handle, width}) => {
  return (
    <>
        <button className={`btn btn-${color} ${width} m-2`} onClick={handle}>{name}</button>
    </>
  )
}

export default Buttons;
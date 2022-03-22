import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Buttons from "./Buttons";


const DisplayUser = ({onlineUser}) => {
    const navigate = useNavigate();
    let {id} = useParams();

    const startExam = () => {
        // console.log(id)
        navigate(`/${id}/exam`)
    }
    
  return (
    <>
        <section className="container-fluid">
            <div className="row">
                <div className="container-fluid col-6 text-center">
                <p>Firstname: {onlineUser.firstname}</p>
                <p>Lastname: {onlineUser.lastname}</p>
                <p>Email: {onlineUser.email}</p>
                <Buttons name="Take Exam" color="danger" handle={startExam}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default DisplayUser;
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AddQuestions from "./AddQuestions";
import Buttons from "./Buttons";
import { useState, useEffect } from 'react';
import Scoreboard from "./Scoreboard";


const Admin = ({addNewQuestion, allStudents}) => {

    const navigate = useNavigate();

    // const [hide, setHide] = useState(false);

    // useEffect(() => {
    //     setHide(false)
    // }, []);

    const hail = () => {
        // setHide(true)
        navigate("/admin/add-questions");
    }

    const see = () => {
        // setHide(true)
        navigate("/admin/scoreboard");
    }

  return (
    <>
    {/* {!hide ? */}
        <section className="container-fluid">
            <div className="row mt-3">
                <div className="col-6 text-center container-fluid">
                    <Buttons name="Add Questions" color="danger" handle={hail}/> <br />
                    <Buttons name="See Scoreboard" color="warning" handle={see}/>
                </div>
            </div>
        </section>
    {/* : */}
    <Routes>
        <Route path="add-questions" element={<AddQuestions addNewQuestion={addNewQuestion}/>}/>
        <Route path="scoreboard" element={<Scoreboard allStudents={allStudents} />}/>
        {/* <Route path="*" element={<Navigate to="/"/>}/> */}
    </Routes>
    {/* } */}
    </>
  )
}

export default Admin;
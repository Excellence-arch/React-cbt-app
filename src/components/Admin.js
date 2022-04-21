import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AddQuestions from "./AddQuestions";
import Buttons from "./Buttons";
import Scoreboard from "./Scoreboard";
import DisplayAllQuestions from './DisplayAllQuestions'


const Admin = ({addNewQuestion, allQuestions, allStudents}) => {

    const navigate = useNavigate();

    const hail = () => {
        navigate("/admin/add-questions");
    }

    const see = () => {
        navigate("/admin/scoreboard");
    }

    const nav = () => {
        navigate("/admin/display-questions")
    }
  return (
    <>
        <section className="container-fluid">
            <div className="row mt-3">
                <div className="col-6 text-center container-fluid">
                    <Buttons name="Add Questions" color="danger" handle={hail}/> <br />
                    <Buttons name="See Scoreboard" color="warning" handle={see}/>
                    <br />
                    <Buttons name="See all questions" color="info" handle={nav}/>
                </div>
            </div>
        </section>
    <Routes>
        {/* <Route path="/" element={<Navigate to="/admin"/>} /> */}
        <Route path="add-questions" element={<AddQuestions addNewQuestion={addNewQuestion}/>}/>
        <Route path="scoreboard" element={<Scoreboard allStudents={allStudents} />}/>
        <Route path="display-questions" element={<DisplayAllQuestions allQuestions={allQuestions} />} />
        {/* <Route path="*" element={<Navigate to="/admin"/>}/> */}
    </Routes>
    </>
  )
}

export default Admin;
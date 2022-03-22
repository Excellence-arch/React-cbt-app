import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import DisplayUser from "./DisplayUser";
import Exam from "./Exam";
import { useEffect, useState } from 'react';
import Home from "./Home";

const BeforeExam = ({onlineUser, len, allQuestions, submit}) => {

    const [nones, setNones] = useState("");
    const navigate = useNavigate();
    let {id} = useParams();

    useEffect(() => {
        if(len == 0 || id > len) {
            alert("Wrong address");
        } else {
            navigate(`/${id}/display-user`);
        }
    }, [nones]);

  return (
    <>
        <Routes>
            <Route path="display-user" element={<DisplayUser onlineUser={onlineUser} />}/>
            <Route path="exam" element={<Exam submitAnswers={submit} allQuestions={allQuestions} />}/>
            {/* <Route path="*" element={<Navigate to="/"/>}/> */}
        </Routes>
    </>
  )
}

export default BeforeExam;
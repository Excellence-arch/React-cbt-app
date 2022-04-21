import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
// import AddQuestions from './components/AddQuestions';
import Admin from './components/Admin';
import BeforeExam from './components/BeforeExam';
// import DisplayUser from './components/DisplayUser';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Scoreboard from './components/Scoreboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {

  const [allStudents, setAllStudents] = useState([]);
  const [onlineUser, setOnlineUser] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);


  const navigate = useNavigate();

  const login = (loginDets) => {
    let found = allStudents.find((val, i)=> val.email == loginDets.email && val.password == loginDets.password);
    setOnlineUser(found);
    if (found) {
      navigate(`/${found.id}`);
    } else {
      alert("Invalid email or password");
    }
  }

  const signUp = (signDets) => {
    let found = allStudents.find((val, _) => val.email == signDets.email);
    if (found) {
      alert("This email has already been registered");
    } else {
      let newStudent = signDets;
      newStudent.score = 0;
      newStudent.id = allStudents.length;
      setAllStudents([...allStudents, newStudent])
    }
  }

  const addNewQuestion = (newQuestion) => {
    setAllQuestions([...allQuestions, newQuestion]);
  }

  const submit = (allAnswers, studentId) => {
    let student = allStudents;
    let newScore = allAnswers.reduce((i, j) => i + j, 0);
    student[studentId].score = newScore;
    setAllStudents(student);
    navigate("/scoreboard");
  }

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id/*" element={<BeforeExam submit={submit} onlineUser={onlineUser} len={allStudents.length} allQuestions={allQuestions}/>}/>
        <Route path="/sign-in" element={<SignIn checkLogin={login}/>}/>
        <Route path="/sign-up" element={<SignUp checkSignUp={signUp}/>}/>
        <Route path="/admin/*" element={<Admin allQuestions={allQuestions} addNewQuestion={addNewQuestion} allStudents={allStudents} />}/>
        <Route path="/scoreboard" element={<Scoreboard allStudents={allStudents}/>}/>
        <Route path="*" element={<h2>Error 404</h2>} />
      </Routes>
    </>
  )
}

export default App;
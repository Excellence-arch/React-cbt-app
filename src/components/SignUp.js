import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import Input from "./Input";

const SignUp = ({checkSignUp}) => {

  const navigate = useNavigate()

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const setEmpty = () => {
    checkSignUp({firstname, lastname, email, password});
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    navigate("/sign-in")
  }

  return (
    <>
      <section className="container-fluid">
            <div className="row mt-5">
                <div className=" container-fluid col-6 text-center border rounded">
                    <h2>Sign Up</h2>
                    <Input placeholder="Firstname" vals={firstname} change={(e)=> setFirstname(e.target.value)} types="text"/>
                    <Input placeholder="Lastname" vals={lastname} change={(e)=> setLastname(e.target.value)} types="text"/>
                    <Input placeholder="Email" vals={email} change={(e)=> setEmail(e.target.value)} types="email"/>
                    <Input placeholder="Password" change={(e)=> setPassword(e.target.value)} vals={password} types={!showPassword ? `password` : `text`}/>
                    <input type='checkbox' onChange={() => setShowPassword(!showPassword)}/> <span>Show Password</span> <br />
                    <Buttons color="info" width="w-50" name="Sign Up" handle={setEmpty}/> <br />
                    Already have an account? <br />
                    <Link to="/sign-in">Login</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignUp;
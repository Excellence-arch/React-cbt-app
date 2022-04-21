import { useState } from 'react';
import { Link } from 'react-router-dom';
import Buttons from "./Buttons";
import Input from "./Input";

const SignIn = ({checkLogin}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const setEmpty = () => {
        checkLogin({email, password});
        setEmail("");
        setPassword("");
    }

  return (
    <>
        <section className="container-fluid">
            <div className="row mt-5">
                <div className=" container-fluid col-6 text-center border rounded">
                    <h2>Login</h2>
                    <Input placeholder="Email" vals={email} change={(e)=> setEmail(e.target.value)} types="email"/>
                    <Input placeholder="Password" change={(e)=> setPassword(e.target.value)} vals={password} types={!showPassword ? `password` : `text`}/>
                    <input type='checkbox' onChange={() => setShowPassword(!showPassword)}/> <span>Show Password</span> <br />
                    <Buttons color="info" width="w-50" name="Login" handle={setEmpty}/> <br/>
                    Don't have an account? <br />
                    <Link to="/sign-up">Create Account</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignIn;
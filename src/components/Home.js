import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";

const Home = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className="text-center mt-5">
            <Buttons color="danger" name="Take Test" handle={() => navigate("/sign-in")} />
        </div>
    </>
  )
}

export default Home;
import { useNavigate } from "react-router-dom";



const About = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/")
  }
  return (
    <div>
      <h1>About</h1>
      <button onClick={goToHomePage}>Go back to About page</button> 
    </div>
  )
}

export default About;
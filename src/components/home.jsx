import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  const goToAboutPage = () => {
    navigate("/about")
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToAboutPage}>Go to About page</button> 
    </div>
  )
}

export default Home;
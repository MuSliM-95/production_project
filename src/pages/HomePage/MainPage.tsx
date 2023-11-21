import { Link } from "react-router-dom"


const MainPage = () => {
    return (
      <>
      <Link to={"/about"}>
          About Page
      </Link>
      <h1>Main Page</h1>
      </>
    )
 }

 export default MainPage
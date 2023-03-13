import React from "react";
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <br></br>  
      <br></br> 
      <br></br> 
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home
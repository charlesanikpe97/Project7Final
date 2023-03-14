import './navbar.scss';
import { grupomaniaLongLogo2 } from '../SVGs/svgs';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import axios from 'axios';
import React from 'react';


const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser.profilePic)

  const HandleLogout = async() => {
    localStorage.removeItem('user')
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    const res = await axios.post('http://localhost:8800/api/auth/logout', {})
    window.location.reload();
  }

  return (
     <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <div className="left ">
         <Link to="/" style={{ textDecoration: "none" }}>
           <span>{grupomaniaLongLogo2}</span>
        </Link> 
        <HomeOutlinedIcon />
         {darkMode ? ( 
     <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
   <img src={ "/upload/" + currentUser.profilePic }
  alt=""
   />
 {/* <Link style={{color: '#FDA902'}} to={`http://localhost:3000/profile/${currentUser.id}`}> */}
  <li className='nav-item dropdown' style={{ listStyleType: "none" }}> 
  <a className ="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <span style={{ color: "#FDA902" }}>{ currentUser.name }</span>
  </a>
  <ul className="dropdown-menu">
            <li><a className="dropdown-item" href= {`http://localhost:3000/profile/${currentUser.id}`}>Vist Your Profile</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li onClick={ HandleLogout }><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
  </li>
  {/* </Link>  */}
  </div>
  
    </div>
  </div>
  </div>
</nav>
    


  )
}


export default Navbar;
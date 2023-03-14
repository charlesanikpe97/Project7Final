import '../Login/Login.scss';
import {grupomaniaRedLogo, signupPageSvg} from '../../components/SVGs/svgs';
import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';



const Signup = () => {

    const [inputs, setInputs] = useState({
        name:'',
        username:'',
        email:'',
        password:'',
    })
    
    const [success, setSuccess] = useState(null);
    const [err, setErr] = useState(null);
    

    const handleChange = (e) => {
        setInputs((prev) =>({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
    
        try {
         const res = await axios.post("http://localhost:8800/api/auth/signup", inputs);
         setSuccess(res.data)
         setTimeout(window.location.assign('http://localhost:3000/login'), 3000)
        } catch (err) {
          setErr(err.response.data);
          console.log(err);
        }
        
      };




    return (
        <div className='hp-container'>
            <div className='cta'>
                <Link to = '/signup' className='takehome'>{grupomaniaRedLogo}</Link>
                <h2 className='cta-text'>Creating a Community driven workplace</h2>
                <div className='form-floating mb-3'>
                    <input type="text" className="form-control" id="floatingName" placeholder="Name" name='name' onChange={ handleChange }></input>
                    <label for="floatingName">Name</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="text" className="form-control" id="floatingUsername" placeholder="Username" name='username' onChange={ handleChange }></input>
                    <label for="floatingSurname">Username</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={ handleChange }></input>
                    <label for="floatingInput">Email Address</label>
                </div>
                <div class="form-floating">
                    <input type="password" className="form-control" id="floatingCreatePassword" placeholder="Create Password" name='password' onChange={ handleChange }></input>
                    <label for="floatingCreatePassword">Create Password</label>
              </div>
              <div style={{color: '#FDA902',textAlign:'center', marginTop: '.4rem',marginBottom: '0',paddingBottom: '0',}}>{success}</div>
              <div style={{color: '#FDA902',textAlign:'center', marginTop: '.4rem',marginBottom: '0',paddingBottom: '0',}}>{err}</div>
              <div className="but-signup-su">
                <button type="button" className="btn btn-outline-warning-su" onClick={ handleClick }>Submit</button>
                <span> Already have one? <Link to = '/login' className="su">Login Here</Link></span>
            </div>
            </div>
            <div className='svg-su'>
                {signupPageSvg}
            </div>
        </div>
    
    )
}


export default Signup;
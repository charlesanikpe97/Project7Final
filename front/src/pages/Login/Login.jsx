import './Login.scss'
import {grupomaniaYellowLogo, loginPageSvg} from '../../components/SVGs/svgs';
import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext.js'



const Login = () => {

    const [inputs, setInputs] = useState({
        username:'',
        password:'',
    })

    const [err, setErr] = useState(null)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) =>({ ...prev, [e.target.name]: e.target.value }));
    }

    const { login } = useContext(AuthContext);

    const handleLogin = async (e) =>{
        e.preventDefault();
        try {
            await login(inputs)
            navigate('/')
        } catch (err) {
            setErr(err.response.data)
        }
    }

   
    


    return (
        <div className='hp-container'>
        <div className='svg'>
            {loginPageSvg}
        </div>
        <div className='cta'>
            <Link to = '/login' className='takehome'>{grupomaniaYellowLogo}</Link>
            <h2 className='cta-text'>Creating a Community driven workplace</h2>
            <div className='form-floating mb-3'>
                <input type="text" className="form-control" id="floatingInput" placeholder="Username" name='username' onChange= { handleChange }></input>
                <label for = 'floatingInput'>Username</label>
            </div>
            <div className='form-floating'>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' onChange= { handleChange }></input>
                <label for="floatingPassword">Password</label>
            </div>
            <div className='error'>{ err && err }</div>
            <div className='but-signup'>  
            <button type="button" className="btn btn-outline-warning" onClick= { handleLogin }>Sign In</button>
            <span>Don't have an account yet? <Link to = '/signup'> <span className='yColor'> Sign Up</span></Link></span>
            </div>
        </div>
    </div>
    )

}

export default Login;
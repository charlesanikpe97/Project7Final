import './404.scss';
import { pageNotFound } from '../SVGs/svgs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


const PageNotFound = () =>{
    return (
        <div className="flex">
            <div> { pageNotFound } </div>
            <h1>Wandered away from the trail and got lost?</h1>
            <p>Sorry, we can't find the page you're after, chances are you won't either. Please click the button below to get redirected back home. Thanks.</p>
            <div>
                <ArrowBackIcon/>
               <Link to = { 'http://localhost:3000/login' } style = {{ color: "#FDA902" }}> <span role={'button'}>Take me back home please, I'm cold and confused.</span> </Link>
            </div>
        </div>
    )
}

export default PageNotFound;
import {Link} from "react-router-dom";


const SignIn = () => {
    return (
        <div className='sign-in-window'>
            <p>SignIn</p>
            <label>
                <p>Email address</p>
                <input placeholder='Email address' className='email__address'/>
            </label>
            <label>
                <p>Password</p>
                <input placeholder='Password' className='password'/>
            </label>
            <button className='login-button'>
                Login
            </button>
            <div className='linkSU'>Dont have an account?
                <Link to='/register'>SignUp</Link>
            </div>
        </div>
    )
};

export default SignIn;
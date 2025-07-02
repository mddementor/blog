import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className='register-window'>
            <div>Create new account</div>
            <label>
                <p>Username</p>
                <input placeholder='Username'/>
            </label>
            <label>
                <p>Email address</p>
                <input placeholder='Email address'/>
            </label>
            <label>
                <p>Password</p>
                <input placeholder='Password'/>
            </label>
            <label>
                <p>Repeat Password</p>
                <input placeholder='Repeat Password'/>
            </label>
            <label>
                <input type='checkbox'/>
                I agree to the processing of my personal information
            </label>
            <button>
                Create
            </button>
            <section>
                Already have an account? <Link to='/login'>Sign In.</Link>
            </section>
        </div>
    )
};

export default SignUp;
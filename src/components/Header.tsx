import {Link} from "react-router-dom";
//import { Input} from ''


const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='header-item'>
                Realworld Blog
            </div>
            <div>
                <div className='nav-auth'>
                    <Link to='/login' className='sign_in_link'>
                        SignIn
                    </Link>
                    <Link to='/register'className='sign_up_link' >
                        SignUp
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Header;
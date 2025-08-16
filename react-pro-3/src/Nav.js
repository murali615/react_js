import { Link } from 'react-router-dom';

const Nav = () => {

    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </>
    )
}

export default Nav;

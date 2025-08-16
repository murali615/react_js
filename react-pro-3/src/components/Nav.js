import  {Link} from 'react-router-dom';

const Nav = () =>{
    return(
        <>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/login">Login</Link>&nbsp;&nbsp;
            <Link to="/signup">Signup</Link>&nbsp;&nbsp;
            <Link to="/feed">Feed</Link>&nbsp;&nbsp;
        </>
        
    )
}

export default Nav;

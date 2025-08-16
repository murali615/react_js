import {doLogin} from '../utils/Api';
import { LoginApi } from '../services/Login';
import axios from 'axios';

const Home = () =>{



    function add(a ,b){
        return a+ b;
    }



    const callLoginApi = () => {

        LoginApi('website','ardream2222@gmail.com','15081947').then(
            (response) => {
                console.log(response);
            }
        )

    }


    const loginSubmit = () => {
        doLogin('website','afasfaf','fafa').then(
            (response) => {
                console.log(response);
            }
        ).catch(
            (response) =>{
                console.log(response);
            }
        )
    }

    return(
        <>
        <p>Home page</p>
        <button type="button" onClick={callLoginApi} >Login</button>
        </>
    )
}

export default Home;

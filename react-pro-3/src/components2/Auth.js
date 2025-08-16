import { useState } from "react";
import { LoginApi } from '../apis/Auth';

const Auth = () =>{
    
    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");

    const loginSubmit =() => {

        LoginApi("webiste", email, passowrd).then(
            (response) =>{
                console.log(response)
                console.log(response.data.result);
            }
        );
        

    }

    

    return(
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-4">
                        <input type="text" placeholder="Email" className="form-control" value={email} onChange={ (e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-lg-4">
                        <input type="text" placeholder="Passowrd" className="form-control" value={passowrd} onChange={ (e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-lg-4">
                        <button type="button" className="btn btn-primary btn-block" onClick={loginSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;

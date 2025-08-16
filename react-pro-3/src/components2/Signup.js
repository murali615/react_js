import { useState } from "react";
import { LoginApi } from '../apis/Auth';

const Signup = () =>{
    
    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [countryCode, setCountryCode] = useState("91");
    
    const signupSubmit =() => {

        

    }

    

    return(
        <>
            <div className="container mt-4">
                <div className="row  mt-3">
                    <div className="col-lg-4">
                        <input type="text" placeholder="Name" className="form-control" value={name} onChange={ (e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="row  mt-3">
                    <div className="col-lg-4">
                        <input type="text" placeholder="Mobile" className="form-control" value={mobile} onChange={ (e) => setMobile(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">
                        <input type="text" placeholder="Email" className="form-control" value={email} onChange={ (e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">
                        <input type="text" placeholder="Passowrd" className="form-control" value={passowrd} onChange={ (e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4">
                        <button type="button" className="btn btn-primary btn-block" onClick={signupSubmit}>Signup</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;

import { useState } from 'react';
import axios from 'axios';
import amazonLogo from '../images/amazon-logo.png';

function SignUp({ message }) {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Pwd, setPwd] = useState("");

    const [resultsucc, setResultSucc] = useState("");
    const [resultfail, setResultFail] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [pwdError, setPwdError] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handleMobileChange(e) {
        setMobile(e.target.value);
    }
    function handlePwdChange(e) {
        setPwd(e.target.value);
    }

    async function handlebutton() {
        let val = true;

        if (Name.length >= 3) setNameError("");
        else {
            val = false;
            setNameError("Min 3 Characters");
        }

        if (Email.length >= 8 && Email.includes("@")) setEmailError("");
        else {
            val = false;
            setEmailError("Email is Invalid");
        }

        if (Mobile.length === 10 && /^\d+$/.test(Mobile)) setMobileError("");
        else {
            val = false;
            setMobileError("Mobile number is Invalid");
        }

        if (Pwd.length >= 8) setPwdError("");
        else {
            val = false;
            setPwdError("Min 8 Characters");
        }

        if (val) {
            const userDetails = {
                name: Name,
                email: Email,
                password: Pwd,
                mobile: Mobile
            }; https:// https://api.softwareschool.co/auth/signup
//https://api.softwareschool.co/api/std/create-acount
            try {
                const apiresponse = await axios.post('https://api.softwareschool.co/auth/signup', userDetails);
                if (apiresponse.data.result === 'SUCCESS') {
                    setResultSucc(apiresponse.data.message);
                    setResultFail("");
                    //localStorage.setItem("userId", apiresponse.data.result);
                    

                localStorage.setItem("userData", JSON.stringify(apiresponse.data.data) )
                localStorage.setItem('tracking_id', 1)
                window.location = "/"

                    window.location = '/';
                } else {
                    setResultFail("Email already in use. Please try with another email");
                    setResultSucc("");
                }
            } catch (e) {
                setResultFail("Error: " + e.message);
            }
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className='text-center'>
                        <img src={amazonLogo} className='logo-img' alt="Amazon Logo" />
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3>Create Account</h3>

                            {resultsucc && <div className='alert alert-success'>{resultsucc}</div>}
                            {resultfail && <div className='alert alert-danger'>{resultfail}</div>}

                            <div className='mt-3'>
                                <strong>Your name</strong>
                                <input type="text" className='form-control' placeholder='Your full name' onChange={handleNameChange} />
                                <div className='text-danger'>{nameError}</div>
                            </div>

                            <div className='mt-3'>
                                <strong>Email</strong>
                                <input type="text" className='form-control' placeholder='Email' onChange={handleEmailChange} />
                                <div className='text-danger'>{emailError}</div>
                            </div>

                            <div className='mt-3'>
                                <strong>Mobile</strong>
                                <input type="text" className='form-control' placeholder='Mobile Number' onChange={handleMobileChange} />
                                <div className='text-danger'>{mobileError}</div>
                            </div>

                            <div className='mt-3'>
                                <strong>Password</strong>
                                <input type="password" className='form-control' placeholder='Password' onChange={handlePwdChange} />
                                <div className='text-danger'>{pwdError}</div>
                            </div>

                            <div className='mt-4 d-grid'>
                                <button className='btn btn-warning' onClick={handlebutton}>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center mt-5'>
                <div className='col-4 text-center'>
                    <div className='row'>
                        <div className='col-4'><a href='#'>Conditions of Use</a></div>
                        <div className='col-4'><a href='#'>Privacy Policy</a></div>
                        <div className='col-4'><a href='#'>Help</a></div>
                    </div>
                    <div className='mt-3'>
                        &copy; 1996-2024, Amazon.com, Inc. or its affiliates
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

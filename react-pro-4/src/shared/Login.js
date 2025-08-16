
import { useState } from "react";
import axios from 'axios';
import amazonLogo from '../images/amazon-logo.png';
//import { signinApi } from "../services/authService";
import { Link } from "react-router-dom";

function Signin() {
    const [Email, setEmail] = useState("");
    const [Pwd, setPwd] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [apiError, setApiError] = useState(false);

    async function handleLogin() {
        let isValid = true;

        if (Email.length >= 8 && Email.includes("@")) {
            setEmailError("");
        } else {
            isValid = false;
            setEmailError("Email is invalid");
        }

        if (Pwd.length >= 8) {
            setPwdError("");
        } else {
            isValid = false;
            setPwdError("Password must be at least 8 characters");
        }

        if (isValid) {

            const userDetails = {email:Email,password:Pwd};
            console.log(userDetails.email)
            try {
                const apiResponse = await axios.post('https://api.softwareschool.co/auth/login',userDetails);
                console.log(apiResponse.data.result)
                if (apiResponse.data.result === "SUCCESS") {
                    console.log(apiResponse.data.result)
                    localStorage.setItem("userData", JSON.stringify(apiResponse.data.data));
                    window.location = "/";
                } else {
                    setApiError(true);
                }
            } catch (error) {
                setApiError(true); 
            }
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="text-center">
                        <img src={amazonLogo} className="logo-img" alt="Amazon Logo" />
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3>Login</h3>
                            <div className="mt-3">
                                <strong>Email</strong>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    value={Email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                {emailError && <div className="text-danger">{emailError}</div>}
                            </div>
                            <div className="mt-3">
                                <strong>Password</strong>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={Pwd}
                                    onChange={e => setPwd(e.target.value)}
                                />
                                <div>
                                    <i className="bi bi-info-lg text-primary"></i>{" "}
                                    <span className="fs-6">Passwords must be at least 8 characters.</span>
                                </div>
                                {pwdError && <div className="text-danger">{pwdError}</div>}
                                <div>
                                    <Link to="/reset-password">Forgot Password?</Link>
                                </div>
                            </div>
                            <div className="mt-4 d-grid">
                                <button className="btn btn-warning" onClick={handleLogin}>
                                    Login
                                </button>
                                {apiError && (
                                    <div className="text-danger mt-2">Invalid login credentials</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-4 text-center">
                    <div className="row">
                        <div className="col-4">
                            <a href="#">Conditions of Use</a>
                        </div>
                        <div className="col-4">
                            <a href="#">Privacy Policy</a>
                        </div>
                        <div className="col-4">
                            <a href="#">Help</a>
                        </div>
                    </div>
                    <div className="mt-3">
                        &copy; 1996-2024, Amazon.com, Inc. or its affiliates
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;

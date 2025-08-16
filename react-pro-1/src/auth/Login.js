import {useState} from 'react';
import axios from 'axios';
import Header from '../SHARED/Header';
import Footer from '../SHARED/Footer';
function Login()
{
    var [Email,setEmail]=useState("")
    var [Pwd,setPwd]=useState("")
    var [emailError,setEmailError]=useState("")
    var [pwdError,setPwdError]=useState("")
    var [resultsucc,setResultSucc]=useState("")
    var [resultfail,setResultFail]=useState("")
    //var [apiresponse,setApiResponse]=useState("")
   // var [Result,setResult]=useState("")
   


  
    function handleEmailChange(e)
    {
        setEmail(e.target.value)
    }
    function handlePwdChange(e)
    {
        setPwd(e.target.value)
    }
   async function handlebutton()
    {   let val=true;
        if(Email.length>=8)
        {
            setEmailError("")
        }
        else{
            val=false;
            setEmailError("Email is Invalid")
        }
        if(Pwd.length>=8)
        {   
            setPwdError("")
        }
        else
        {    val=false;
            setPwdError("Min 8 Charcters")
        }
        if(val)
            {    
                var userDetails={'email':Email,'password':Pwd }
                console.log(userDetails)
               try
               {
               var apiresponse=await axios.post('https://api.softwareschool.co/auth/login',userDetails)
               console.log(apiresponse)
               if(apiresponse.data.result==='SUCCESS')
                {
                    setResultSucc(apiresponse.data.message)
                    setResultFail("")
                    console.log(apiresponse.data.data.userId)
                    localStorage.setItem('RESULT',apiresponse.data.result)
                    window.location='/'               
                }
                else
                {
                    setResultFail(apiresponse.data.message)
                    setResultSucc("")
                }
            }
            catch(e)
            {
                setResultFail(e.message)
            }
    
            }
       
    }
    return (
        <div className="container">
            <div className="row">
             <Header/>
            </div>
            <div className="row justify-content-center align-items-center mb-3 mt-3">
               <div className="col-4">
                <h1>Login</h1>
                <div className="mb-3">
                    <label className="mb-1">Email</label>
                    <input type="text" className="form-control" onChange={e=>handleEmailChange(e)} placeholder="Enter Email"/>
                    <div className="text-danger">{emailError}</div>
                </div>
                <div className="mb-3">
                    <label className="mb-1">Password</label>
                    <input type="password" className="form-control" onChange={e=>handlePwdChange(e)} placeholder="Enter Password"/>
                    <div className="text-danger">{pwdError}</div>
                </div>
                <div>
                    <button className="btn btn-warning mb-2" onClick={handlebutton}>Login</button>
                    <div className="alert alert-success" role="alert">
                         {resultsucc}
                    </div>
                    <div className="alert alert-danger" role="alert">
                         {resultfail}
                    </div>  
                </div>
                
               </div>
            </div>
            <div className="row">
             <Footer/>
            </div>
        </div>
    )
}
export{Login}
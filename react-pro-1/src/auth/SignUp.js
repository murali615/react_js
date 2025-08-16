import {useState} from 'react';
import axios from 'axios';
function SignUp()
{
    var [Name,setName]=useState("")
    var [Email,setEmail]=useState("")
    var [Mobile,setMobile]=useState("")
    var [Pwd,setPwd]=useState("")
    var [resultsucc,setResultSucc]=useState("")
    var [resultfail,setResultFail]=useState("")
    //var [apiresponse,setApiResponse]=useState("")
   // var [Result,setResult]=useState("")
   
   var [nameError,setNameError]=useState("")
   var [emailError,setEmailError]=useState("")
   var [mobileError,setMobileError]=useState("")
   var [pwdError,setPwdError]=useState("")
    function handleNameChange(e)
    {
        setName(e.target.value)
    }
    function handleEmailChange(e)
    {
        setEmail(e.target.value)
    }
    function handleMobileChange(e)
    {
        setMobile(e.target.value)
    }
    function handlePwdChange(e)
    {
        setPwd(e.target.value)
    }
   async function handlebutton()
    {   let val=true;
        if(Name.length>=3)
        {   
            setNameError("")
        }
        else{
            val=false;
            setNameError("Min 3 Characters")
        }
        if(Email.length>=8)
        {
            setEmailError("")
        }
        else{
            val=false;
            setEmailError("Email is Invalid")
        }
        if(Mobile.length===10)
        {
            setMobileError("")
        }
        else
        {    val=false;
            setMobileError("Mobile number is Invalid")
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
        {    var userDetails={
                 'name':Name,'email':Email,'password':Pwd,'mobile':Mobile

             }
             console.log(userDetails)
             try{
           var apiresponse=await axios.post('https://api.softwareschool.co/auth/signup',userDetails)
           console.log(apiresponse)
           if(apiresponse.data.result==='SUCCESS')
            {   console.log(apiresponse.data.data)
                setResultSucc(apiresponse.data.message)
                setResultFail("")
                localStorage.setItem("userId",apiresponse.data.data)
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
       
        
         //setResult(validate(Name,Email,Mobile,Pwd))
    }
   /* function validate(Name,Email,Mobile,Pwd)
    {
        if(Name.length>=3&&Email.length>=8&&Mobile.length===10&&Pwd.length>=6)
        {
            return "Success"
        }
        else{
            return "Please enter the valid credintials in the fields before submitting the form"
        }
    }*/
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Create-Account</h1>
                    <div className="mb-3">
                        <label className="mb-1">Name</label>
                        <input type="text" className="form-control"onChange={e=>handleNameChange(e)} placeholder="Enter Name"/>
                        <div className="text-danger">{nameError}</div>
                    </div>
                    <div className="mb-3">
                        <label className="mb-1">Email</label>
                        <input type="text" className="form-control" onChange={e=>handleEmailChange(e)} placeholder="Enter Email"/>
                        <div className="text-danger">{emailError}</div>
                    </div>
                    <div className="mb-3">
                        <label className="mb-1">Mobile</label>
                        <input type="tel" maxLength={10} className="form-control"onChange={e=>handleMobileChange(e)} placeholder="Enter MobileNo"/>
                        <div className="text-danger">{mobileError}</div>
                    </div>
                    <div className="mb-3">
                        <label className="mb-1">Password</label>
                        <input type="password" className="form-control"onChange={e=>handlePwdChange(e)}placeholder="Enter Password"/>
                        <div className="text-danger">{pwdError}</div> 
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-warning" onClick={e=>handlebutton(e)}>Create Account</button>
                     </div>
                     <div className="alert alert-success" role="alert">
                         {resultsucc}
                        </div>
                        <div className="alert alert-danger" role="alert">
                         {resultfail}
                        </div>  
                     </div>
                                      
            </div>
        </div>
    );
}
export{SignUp}



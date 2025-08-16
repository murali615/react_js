import {Form} from './Form';
function Home()
{  var logUserId=localStorage.getItem('userId')
   function logout()
   {
       localStorage.clear();
       window.location.reload()
   }
    return (
        <div className="conatiner">
            <div calssName="row">
                <div className="col-4">
                    <h1>welcome to HomePage</h1>
                    <br/>
                    {
                        logUserId==null && <div><a href='/SignUp'>Create Account</a> <a href='/Login'>Login</a></div>
                    }
                    {
                        logUserId!=null && <div><button className="btn btn-danger" onClick={e=>logout()}>LogOut</button></div>
                    }
              </div>
             <div><Form/></div>
            </div>
        </div>
    )
}
export{Home}
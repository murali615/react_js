import Header from '../SHARED/Header';
import Footer from '../SHARED/Footer';
import {Links} from '../SHARED/Links';
import {SignUp} from '../SHARED/SignUp';
function Home()
{ 
  var data="please create account first"
 
      return(
        <div className="container px-5 ">
            <div className="row align-items-center">
                <div className="col-12">
                  <Header/>
                </div>
                <div className="col-md-6 p-3">
                  <Links/>
                </div>
                <div className="col-md-6 p-3">
                   <SignUp message={data}/>
                </div>
                
                <div className="col-12">
                  <Footer/>
                </div>
            </div>
        </div>
      )
}
export{Home}

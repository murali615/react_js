import {useState} from 'react';
function Form() {
    var [Languges,setLang]=useState("")
    function langSel(e)
    {
        setLang(e.target.value)
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1 className="text-success">Form</h1>
  
            {/* Courses */}
            <div>
              <label className="mb-2">Courses</label>
              <select className="form-select mb-3">
                <option>ReactJs</option>
                <option>Java</option>
                <option>Python</option>
                <option>SpringBoot</option>
              </select>
            </div>
  
            {/* Gender */}
            <div>
              <label className="mb-2">Gender:</label>
              <div className="form-check mb-1">
                <input
                  className="form-check-input"
                  value="Male"
                  type="radio"
                  name="gender"
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  value="Female"
                  type="radio"
                  name="gender"
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
  
            {/* Languages */}
            <div>
              <label className="mb-2">Languages:</label>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" value="Telugu" onChange={e=>langSel(e)}/>
                <label className="form-check-label">Telugu</label>
              </div>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" value="English"/>
                <label className="form-check-label">English</label>
              </div>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" value="Hindi"/>
                <label className="form-check-label">Hindi</label>
              </div>
            <div>
                {
                    Languges.toString()
                }
            </div>
            </div>
          </div>
          
        </div>
       </div>
    );
  }
  
  export {Form};
  
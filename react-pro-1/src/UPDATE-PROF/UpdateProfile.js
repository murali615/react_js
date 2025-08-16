import Header from '../SHARED/Header'
import Footer from '../SHARED/Footer'
import {useState} from 'react'
function UpdateProfile()
{
    var [file,setFile]=useState("")
    var [uploaded,setUploaded]=useState("")
    var [fileSizeError,setSizeError]=useState("")
    var [fileTypeError,setTypeError]=useState("")
    var [sizeTypeError,setSizeTypeError]=useState("")
    function fileType(fileType)
    {
       console.log(fileType.target.files[0])
       setFile(fileType.target.files[0])
    }
    function Upload()
    {  if(file=="")
       {
         window.alert("please select a file first")
       }
       else
       {   //console.log((file.size)/(1024*1024*1024))
           var fileSize=((file.size)/(1024*1024))
         //  console.log(fileSize)
            var extension=file.name.split(".")
            extension=extension[extension.length-1]
            if((extension=="pptx"||extension=="png"||extension=="pdf")&&(fileSize<=500))
            {      window.alert("Uploaded")
                   setUploaded("Success")
                   setSizeError("")
            }
            else if(fileSize>500&&(!(extension=="pptx"||extension=="png"||extension=="pdf")))
            {
                setSizeTypeError("you can't upload for large files & Also you can't upload other than .png .pptx .pdf extensions")
                setSizeError("")
                setTypeError("")
            }
            else if(fileSize>500)
            {   setSizeTypeError("")
                setTypeError("")
                setSizeError("you can't upload for large files ")
                //window.alert("you can't upload for large files")
            }
            else{
                setSizeError("")
                setSizeTypeError("")
                setTypeError("you cant upload other than.png .pptx .pdf extensions")
                //window.alert("you cant upload other than png pptx pdf")
            }
        }
      //console.log(fileType.target.files[0])
    }
    return (
        <div className="container mt-2 ">
            <div className="row">
                <Header/>
            </div>
            <div className="row shadow my-2">
              <div className="col-12">
                    <h1>UpdateProfile</h1>
                <div>
                    <input type="file" className="form-control mt-3 mb-2" onChange={e=>fileType(e)}/>
                </div>
                <div>
                   { uploaded=="Success"&&
                      <button className="btn btn-primary mb-3 p-1">Uploaded</button>
                   }
                    {(uploaded!="Success"||fileSizeError!="" ) &&
                      <button className="btn btn-primary mb-3 p-1" onClick={e=>Upload()}>UploadFile</button>
                    }
                     {(uploaded!="Success"&& fileSizeError!="" ) &&
                      <p className="text-danger">{fileSizeError}</p>

                    }
                    {(uploaded!="Success"&&fileTypeError!="" ) &&
                      <p className="text-danger">{fileTypeError}</p>
                    }
                    {(uploaded!="Success"&&sizeTypeError!="" ) &&
                      <p className="text-danger">{sizeTypeError}</p>
                    }
                   </div>
              </div>
            </div>
            <div className="row">
                <Footer/>
            </div>

        </div>
    )
}
export default UpdateProfile

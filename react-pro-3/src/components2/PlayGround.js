import { useState } from "react";

const PlayGround = () => {

    // declare variables
    let [userName, setUserName] = useState("Anji");
    const [userEmail, setUserEmail] = useState("ardream2222@gmail.com");
    const [userName2, setUserName2] = useState("");
    
    const [posts, setPosts] = useState( ["post 1", "post 2", "number 3" ] );

    const [jsonData, setJsonData] = useState( { name:"anji", email: "ar@gmail.com", mobile:"7022858863" } );

    const [arrayJsonData, setArrayJsonData] = useState( [
        { name:"anji", email: "ar@gmail.com", mobile:"7022858863" },
        { name:"barghav", email: "bhargav@gmail.com", mobile:"12345678" },
        { name:"dd", email: "dd@gmail.com", mobile:"8296954581" }
    ] )

    const [products, setProducts] = useState([
        { name:"Redmi pro", imagePath: "https://rukminim1.flixcart.com/image/312/312/ke1pnrk0/mobile/h/f/2/mi-redmi-9-prime-m2004j191-original-imafutb5637bes8y.jpeg?q=70", price:"10000" },
        { name:"Redmi max", imagePath: "https://rukminim1.flixcart.com/image/312/312/ke0a7ww0/mobile/4/r/e/mi-redmi-9-prime-m2004j191-original-imafushhfhy3tbp9.jpeg?q=70", price:"12000" },
        { name:"Redmi mi", imagePath: "https://rukminim1.flixcart.com/image/312/312/ke1pnrk0/mobile/h/f/2/mi-redmi-9-prime-m2004j191-original-imafutb5637bes8y.jpeg?q=70",  price:"15000" }
    ])

    


    const changeUserName = () =>{
        // function
        console.log(userName);
        console.log(userName);
        console.log(userName);
        console.log(userName);
       

        setUserName("Barghava");

    }

    return(
        <>
            <div className='container'>
                <div className="row">
                    {
                        products.map( (product) =>
                            <div className="col-lg-3">
                                
                                <img src={product.imagePath}  width="200px" height="auto" /> <br/>
                                <h5>{ product.name }</h5>
                                {product.price}
                                
                            </div>
                        )
                    }
                </div>
                <div className="row mt-4">
                    <hr />
                    <div className="col-lg-12">
                        {
                            arrayJsonData.map( (item) => 
                                
                                    <p>
                                        { item.name } <br/>
                                        { item.mobile }
                                    </p>
                            )
                        }
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        name from json data<br/>
                        <h2>Name: { jsonData.name }</h2>
                        <p>Email: { jsonData.email }</p>
                        <p>Mobile: { jsonData.mobile }</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    

                    <div className="col-lg-12">
                        {/* How to use variables */}
                        { userEmail + " :: "+ userName  }
                        <br/>
                        { userEmail }
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        {/* How to use variables */}
                        Name: { userName  }
                        <br/>
                        Email: { userEmail }
                        <br/>
                        
                    </div>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-primary" onClick={changeUserName} >Change user name</button>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-12">
                        Number of posts: { posts.length }<br/>
                        <div>
                            { posts[0] }<br/>
                            { posts[1] }<br/>
                            { posts[2] }
                        </div>
                    </div> 
                    <div className="col-lg-12">
                        with map function
                       {
                           posts.map( (post) => 
                            <h2>{ post }</h2>    
                           )
                       }
                    </div> 
                </div>
            </div>
        </>
    )

}

export default PlayGround;

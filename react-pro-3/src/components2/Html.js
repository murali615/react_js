
const Html = () => {

    return(
        <>
            <div className="container">
                
                <div className="row">

                    <div className="col-lg-4 col-6">
                        Lables
                    </div>
                    <div className="col-lg-8 col-6">
                        Mails
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4 bg-primary-custom bg-primary-cus">
                        left
                    </div>
                    <div className="col-lg-4 bg-danger">
                        <h5>Bootstrap</h5>
                        <span className="text-secondary">CSS Framework</span>
                    </div>
                    <div className="col-lg-4 bg-warning">
                        right
                        <span className="text-danger">Invalid email or passowrd</span>
                    </div>
                </div>

                <div className="row fb-margin-3 ">
                    <div className="col-lg-6 bg-light fb-padding-3">
                        ASDFGGFD KJFAJF KFB ASKF KASF AKF 
                    </div>
                    <div className="col-lg-6 bg-secondary">
                        ASDFGGFD KJFAJF KFB ASKF KASF AKF 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 bg-danger text-left">
                        ASDFGGFD KJFAJF KFB ASKF KASF
                    </div>
                    <div className="col-lg-6 bg-danger">
                        ASDFGGFD KJFAJF KFB ASKF KASF 
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 bg-light ">
                        <div className="map fb-custom-height">
                            map box
                        </div>
                        <div className="textbox">
                            <input type="text" className="fomr-control" placeholder="Search place" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <button className="btn btn-primary btn-block" type="button" >Login</button>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn btn-warning badge-pill" type="button" >Buy</button>
                    </div>
                    <div className="col-lg-3">
                        <button className="btn btn-dark" type="button" >Book a ride</button>
                        <br/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <th>Col 1</th>
                                <th>Col 2</th>
                                <th>Col 3</th>
                                <th>Col 4</th>
                                <th>Col 5</th>
                                <th>Col 5</th>
                                <th>Col 5</th>
                                <th>Col 5</th>
                                <th>Col 9</th>
                                <th>Col 10</th>
                                <th>Col 11</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                    <td> data 1 data 1 dat1</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )

}

export default Html;

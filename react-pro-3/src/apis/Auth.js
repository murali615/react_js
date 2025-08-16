import axios from 'axios';

export const LoginApi = (source, email, passowrd) =>{

    console.log(source, email, passowrd);
    
    let form = new FormData();
    form.append("source", source);
    form.append("signinSrEmail", email);
    form.append("signinSrPassword", passowrd);

    return axios.post("https://www.edstaack.com/api/learning/signin-jarvish.php", form);
    

}



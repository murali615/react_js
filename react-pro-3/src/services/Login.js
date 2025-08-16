import axios from 'axios';

export const LoginApi = (source, email, password) =>{

    let form = new FormData();

    form.append("source", source);
    form.append("signinSrEmail", email);
    form.append("signinSrPassword", password);

    return axios.post("http://localhost:80/api/learning/signin-jarvish.php", form);

}


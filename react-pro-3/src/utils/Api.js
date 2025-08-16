import axios from 'axios';
const api=axios.create();

export const doLogin = (source, email, password) => {
    const form = new FormData();
    form.append('source', source);
    form.append('signinSrEmail', email);
    form.append('signinSrPassword', password);
    return api.post('https://www.edstaack.com/api/learning/signin-jarvish.php', form )
};






import axios from 'axios';

const api = axios.create({
    baseURL: 'http://gt-xxy.anonymous.mobile.exp.direct:3333',
});
//gt-xxy.anonymous.mobile.exp.direct:80
export default api;
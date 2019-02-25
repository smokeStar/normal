import axios from 'axios';

const http = axios.create({
    baseURL: 'http://www.ccyou.xin/movie/api/v0/',
    // baseURL: 'http://localhost:3000/api/v0/',
    withCredentials : true,
    crossDomain : true
});

const config = {
    headers:{
        'Content-Type':'multipart/form-data',
    }
};


export const login    = (data) => http.post('user/login', data);
export const register = (data) => http.post('user/register', data);
export const search   = (data) => http.get('movies/search?keyword=' + data );
export const upload   = (data) => http.post('upload/avatar', data, config);

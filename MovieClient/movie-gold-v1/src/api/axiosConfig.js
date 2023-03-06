import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});
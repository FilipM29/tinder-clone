import axios from 'axios';

const inst = axios.create({
    baseURL: 'https://fm-tinder-clone-server.herokuapp.com'
});

export default inst;
import axios from 'axios';

const IP_ADDRESS = 'http://localhost:3333';
/*
Você pode trocar o endereço e a porta acima pelo IP do servidor/computador, localizado no projeto "server".

*/

const api = axios.create({
    baseURL: IP_ADDRESS 
});

export default api;
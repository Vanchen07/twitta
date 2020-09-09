import axios from 'axios';

export const getBurps = () => { 
    return axios.get('/api/burps/')
};

export const getUserBurps = id => { 
    return axios.get(`/api/burps/user/${id}`)
};

export const writeBurp = data => { 
    return axios.post('/api/burps/', data)
}

export const deleteBurp = id => { 
    return axios.delete(`/api/burps/${id}`)
}


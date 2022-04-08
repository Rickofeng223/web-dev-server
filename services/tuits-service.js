import axios from 'axios';
const API_BASE = process.env.MONGO_AT_LAS_PASS_A9;
const TUITS_API = `${API_BASE}/tuits`;
//const TUITS_API = 'https://spring-web-dev-server.herokuapp.com/api/tuits';
//const TUITS_API = "http://localhost:4000/api/tuits";
    

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API,tuit);
    //console.log(response.data);
    return response.data;
};

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
};

export const deleteTuit = async (tuit) => {
    const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
};
export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
};
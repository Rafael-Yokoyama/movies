import  axios from "axios";

// https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49

const api = axios.create({
    baseURL : "https://ghibliapi.herokuapp.com"
})
export default api
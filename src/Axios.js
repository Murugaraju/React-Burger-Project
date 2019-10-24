import axios from 'axios';


const oneinstanceaxios = axios.create({
    baseURL:"http://localhost:8000"
}) 


oneinstanceaxios.defaults.headers['Authorization']="Simple one";



export default oneinstanceaxios;
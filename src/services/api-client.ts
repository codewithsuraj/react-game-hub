import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ebd3bfd451ef497c82621d290f4f388c'
    }
});
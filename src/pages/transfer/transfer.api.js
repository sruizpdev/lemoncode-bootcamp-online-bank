
import Axios from 'axios';
const url = `${process.env.BASE_API_URL}/trans`;

export const insertTrans = trans =>
    Axios.post(url, trans).then(({ data }) => data);
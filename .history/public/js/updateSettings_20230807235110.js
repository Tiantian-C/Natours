import axios from 'axios';
import { showAlert } from './alerts';

export const updateData = async(name, email) => {
    try {
        const res = await axios({
            method: 'PATCH',
            URL:'http:api/v1/users/updateMe'
        })
    
    } catch (err){
        showAlert('error', err.response.data.message);
    }
}
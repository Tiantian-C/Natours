import axios from 'axios';
import { showAlert } from './alerts';

export const updateData = async(name, email) => {
    try {
        const res = await axios({
            method:'PATCH'
        })
    
    } catch (err){
        showAlert('error', err.response.data.message);
    }
}
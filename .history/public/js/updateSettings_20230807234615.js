import axios from 'axios';
import { showAlert } from './alerts';

export const updateData = async(name, email) => {
    try {
        const res = await axios()
    
    } catch (err){
        showAlert('error', err.response.data.message);
    }
}
import axios from 'axios';
import { showAlert } from './alerts';

export const updateData = (name, email) => {
    try {
        const
    } catch (err){
        showAlert('error', err.response.data.message);
    }
}
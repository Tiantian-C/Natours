import axios from 'axios';
import { showAlert } from './alerts';

export const updateData = async (name, email) => {
    console.log()
    try {
        const res = await axios({
            method: 'PATCH',
            URL: 'http://127.0.0.1:3000/api/v1/users/updateMe',
            data: {
                name,
                email
            }
        });

        if (res.data.status === 'success') {
            showAlert('success', 'Data updated successfully!');
        }
    
    } catch (err){
        showAlert('error', err.response.data.message);
    }
}
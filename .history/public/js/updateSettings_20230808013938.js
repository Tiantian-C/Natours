import axios from 'axios';
import { showAlert } from './alerts';

//type is either 'password' or 'data'
export const updateSettings = async (name, email) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://127.0.0.1:3000/api/v1/users/updateMe',
      data: {
        name,
        email
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', '' updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

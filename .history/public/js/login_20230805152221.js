import axios from 'axios';
import { showAlert } from './alerts';


export const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
     showAlert('success',)
    }
    console.log(res);
  } catch (err) {
    alert(err.response.data.message);
  }
};




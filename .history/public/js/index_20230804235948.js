import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login } from './login';


//DOM ELEMENTS
const mapBox = document.getElementById('map');



//DELEGATION
if (mapbox) {
    const locations = JSON.parse(
      document.getElementById('map').dataset.locations
    );
}
d

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});

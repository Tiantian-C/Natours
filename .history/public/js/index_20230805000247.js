import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login } from './login';


//DOM ELEMENTS
const mapBox = document.getElementById('map');

//VALUES
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

//DELEGATION
if (mapox) {
    const locations = JSON.parse(
      mapBox.dataset.locations
    );
    displayMap(locations);
}


document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  login(email, password);
});

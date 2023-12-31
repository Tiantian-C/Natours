import '@babel/polyfill';
import { displayMap } from './mapbox';
import { login } from './login';


//DOM ELEMENTS
const mapBox = document.get
const locations = JSON.parse(document.getElementById('map').dataset.locations);


//DELEGATION
if()
displayMap(locations);

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});

const login = (email, password) => {
    axios({
        method: 'POST',
        url:'http://127.'
    })
}


document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
})
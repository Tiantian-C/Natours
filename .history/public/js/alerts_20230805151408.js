
export const hideAlert = () => {
    const el =
}


//type is 'success' or 'error'
export const showAlert = (type, msg) => {
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

}
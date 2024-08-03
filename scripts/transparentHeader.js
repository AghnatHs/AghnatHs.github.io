const headerElement = document.getElementById('header');

window.onscroll = () => {
    if (window.scrollY > 100) {
        headerElement.classList.add('header-active');
    } else {
        headerElement.classList.remove('header-active');
    }
}
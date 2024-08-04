const headerElement = document.getElementById('header');
const width = window.innerWidth;

window.onscroll = () => {
    if (width > 600) {
        if (window.scrollY > 100) {
            headerElement.classList.add('header-active');
        } else {
            headerElement.classList.remove('header-active');
        }
    }
    console.log(width);
}
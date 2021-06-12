const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    console.log('CLICK');
    document.body.classList.toggle('nav-open');
});
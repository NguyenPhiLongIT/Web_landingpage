// button scroll to top
let btnScrollToTop = document.querySelector('.scroll');
btnScrollToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0, left: 0, behavior: 'smooth'
    });
});
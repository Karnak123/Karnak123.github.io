window.onscroll = () => {changeOpacity()};

function changeOpacity() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.documentElement.style.setProperty('--opacity', 1);
    } else {
        document.documentElement.style.setProperty('--opacity', 0);
    }
}
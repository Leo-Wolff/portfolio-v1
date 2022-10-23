// VARIABELEN
var counter=1;
var topButton = document.querySelector('#to-top');

// CAROUSEL MENU
setInterval(function() {
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter > 3) {
        counter = 1;
    }
},30000);

// BACK TO TOP KNOP

function buttonscrollHide() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topButton.style.display = 'block';
        topButton.classList.add('top-animation');
    } else {
        topButton.style.display = 'none';
        topButton.classList.remove('top-animation');
    }
}

window.onscroll = function () {
    buttonscrollHide()
};
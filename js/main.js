// HÀM TÌM HTML
getElement = (selector) => {
    return document.querySelector(selector)
}

// HÀM BẬT TẮT ICON LIGHT THEME, DARK THEME
$('.mode-container').click(function () {

    // NẾU SUN ĐANG ACTIVE THÌ HIDE SUN, ACTIVE MOON
    if (getElement('.sun').classList == 'active sun') {
        getElement('.sun').classList = 'hide sun'
        getElement('.moon').classList = 'active moon'
    } else {
        getElement('.sun').classList = 'active sun'
        getElement('.moon').classList = 'hide moon'
    }

    // NẾU ELEMENT CÓ DARK THÊM THÌ THÊM CLASS 'light-theme', BỎ CLASS 'dark-theme', 
    if (getElement('.dark-theme')) {
        $('.dark-theme').addClass('light-theme').removeClass('dark-theme')
    }  else {
        $('.light-theme').addClass('dark-theme').removeClass('light-theme')
    }    
})

// HÀM BẬT TẮT OVERLAY
$('#trigger-overlay').click(function (){
    $('.overlay').addClass('open')
})

$('.overlay-close').click(function (){
    $('.overlay').removeClass('open')
})

// HÀM BACK TO TOP

window.onscroll = () => {
    if (document.documentElement.scrollTop < 100) {
        getElement('#movetop').style.display = 'none'
    }
    else {
        getElement('#movetop').style.display = 'block'
    }
}
getElement('#movetop').addEventListener('click', () => {
    $('html, body').animate({scrollTop: 0}, 600)
})

console.log(getElement('#movetop'))
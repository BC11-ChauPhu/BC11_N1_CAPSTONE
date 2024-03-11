getElement = (selector) => {
    return document.querySelector(selector)
}

$('.mode-container').click(function () {
    if (getElement('.sun').classList == 'active sun') {
        getElement('.sun').classList = 'hide sun'
        getElement('.moon').classList = 'active moon'
    } else {
        getElement('.sun').classList = 'active sun'
        getElement('.moon').classList = 'hide moon'
    }

    if (getElement('.dark-theme')) {
        $('.dark-theme').addClass('light-theme').removeClass('dark-theme')
    }  else {
        $('.light-theme').addClass('dark-theme').removeClass('light-theme')
    }
    
    console.log(getElement('.dark-theme'))
})

$('#trigger-overlay').click(function (){
    $('.overlay').addClass('open')
})

$('.overlay-close').click(function (){
    $('.overlay').removeClass('open')
})
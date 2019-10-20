//INICIA FUNCIONALIDAD PARA EL INPUT DEL SEARCH
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)
    node.classList.add('d-block')
    node.focus()

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

$('#btnSearch').click(function() {
    if($('#inputSearch').is(':visible')) {
        return;
    }
    else {
        animateCSS('#inputSearch' ,'fadeInDown');
    }
})

$('#labelMenu').click(function() {
    if($('#menuNav').is(':visible')) {
        return;
    }
    else {
        animateCSS('#menuNav' ,'fadeInLeft');
    }
})

$(document).on("click",function(e) {     
    if($('#menuNav').is(':visible')) {
        if(e.target.id === 'imgMenu' || e.target.id === 'linkMenu') {
            return;
        }
        else {
            $('#menuNav').removeClass('d-block');
        }
    }
    if($('#inputSearch').is(':visible')) {
        if(e.target.id === 'imgSearch' || e.target.id === 'btnSearch' || e.target.id === 'inputSearch') {
            return;
        }
        else {
            $('#inputSearch').removeClass('d-block');
            $('#inputSearch').val('');
        }
    }    
});

//TERMINA FUNCIONALIDAD PARA EL INPUT DEL SEARCH
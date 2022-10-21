$(function () {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.slider__arrows',
        prevArrow: '<button  type="button" class="slick-next"></button>',
        nextArrow: '<button type="button" class="slick-prev"></button>'
    });

    const menuLink = document.querySelectorAll('.menu-bottom__list-item');
    const menuOverflow = document.querySelector('.menu-bottom__overflow');

    menuLink.forEach(item=>{
        item.addEventListener('click', ()=>{
            menuOverflow.classList.toggle('hide');
        })
    })
})
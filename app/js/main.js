$(function () {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.slider__arrows',
        prevArrow: '<button  type="button" class="slick-next"></button>',
        nextArrow: '<button type="button" class="slick-prev"></button>',
        
    });

    const menuLink = document.querySelectorAll('.menu-bottom__list-item');
    const menuOverflow = document.querySelector('.menu-bottom__overflow');

    menuLink.forEach(item=>{
        item.addEventListener('click', ()=>{
            menuOverflow.classList.toggle('hide');
        })
    })


    $('.page-reviews__slider').slick({
        slidesToShow: 3,
         slidesToScroll: 1,
        appendArrows: '.slider__block-arrows',
        arrows:true,
        prevArrow: '<button  type="button" class="slick-next"></button>',
        nextArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
              breakpoint: 1054,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
})
/* const toggleCollapse = document.querySelector('.toggle-collapse');
const nav = document.querySelector('.nav');


// onclick event on toggle Collapse span tag
toggleCollapse.onclick = () => {
    nav.classList.toggle("collapse");
    //e.target.classList.toggle("toggle-click");
} */
$(document).ready(function(){
    $nav=$('.nav')
    $toggleCollapse=$('.toggle-collapse');
    // click event
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })
    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
        
    });

})


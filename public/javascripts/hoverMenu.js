$("li").on('mouseenter', function(){
    console.log('mouseenter')
    $(this).find(".hover-menu").toggleClass('hover-now')
})
$("li").on('mouseleave', function(){
    console.log('mouseleave')
    $(this).find(".hover-menu").toggleClass('hover-now')
})

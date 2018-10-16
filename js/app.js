$(document).ready(function() {
    $('header').css('background-color', getRandomColor() );
    $('section:contains("c")').css('background-color', getRandomColor() );
    $('section:contains("d")').css('background-color', getRandomColor() );
    $('aside').css('background-color', getRandomColor () );
    $('p').each(function() {
        $(this).css('background-color', getRandomColor() );
    });
});

var width = $(window).width() 
console.log(width);

$(window).on('resize', function() {
    console.log($(window).width());
    if(width <768){
        if($(window).width() > 768){
            $('header').css('background-color', getRandomColor() );
            $('section:contains("c")').css('background-color', getRandomColor() );
            $('section:contains("d")').css('background-color', getRandomColor() );
            $('aside').css('background-color', getRandomColor () );
            $('p').each(function() {
                $(this).css('background-color', getRandomColor() );
            }); 
        }
    }
    if(width >768){
        if($(window).width() < 768){
            $('header').css('background-color', getRandomColor() );
            $('section:contains("c")').css('background-color', getRandomColor() );
            $('section:contains("d")').css('background-color', getRandomColor() );
            $('aside').css('background-color', getRandomColor () );
            $('p').each(function() {
                $(this).css('background-color', getRandomColor() );
            }); 
        }
    }
});


function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

console.log(getRandomColor());

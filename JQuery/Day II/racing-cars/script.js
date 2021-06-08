var carWidth = $('#car1').width();
var trackWidth = $('.content').width() - carWidth - 10;

$('input#start').click(function() {
    var firstCarTime = Math.floor((Math.random() * 4500) + 500);
    var secondCarTime = Math.floor((Math.random() * 4500) + 500);

    var carArrived = false;
    function hasArrived() {
        if (!carArrived) {
            carArrived = true;
            return true;
        }
        return false;
    }
    
    $('#car1').animate({
        left: trackWidth,
    }, firstCarTime, function() {
        if (hasArrived()) {
            $('#raceResult span').text('Red car has won the race in ' + firstCarTime + ' ms!');
            $('#raceResult span').css('color', 'red');
        }
    });

    $('#car2').animate({
        left: trackWidth,
    }, secondCarTime, function() {
        if (hasArrived()) {
            $('#raceResult span').text('Blue car has won the race ' + secondCarTime + ' ms!');
            $('#raceResult span').css('color', 'blue');
        }
    });
})

$('input#reset').click(function() {
    $('.car').css('left', '0');
    $('#raceResult span').text('');
})
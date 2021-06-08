var myImgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var counter = 0;
$('button.next').click(function() {
    if (counter < myImgs.length - 1) {
        counter++;
        $('.currImg').attr('src', `imgs/${myImgs[counter]}`);
    }
})

$('button.prev').click(function() {
    if (counter > 0) {
        counter--;
        $('.currImg').attr('src', `imgs/${myImgs[counter]}`);
    }
})
$('div span').css('color', 'blue'); 

$("div .myClass").css('color', 'purple');

$("div.myClass").css('background-color', 'grey');

$('#firstList li:first').css('color', 'red');
$('#firstList li:eq(3)').css('color', 'green');
$('#firstList li').last().css('color', 'blue'); 

$('#nav li>a').css('color', 'red');

$('.except').children().not('h2').css('color', 'bisque'); // ?

// $('#secondList li:nth-child(3)').nextAll().css('color', 'green'); // nth-child starts with 1?
$('#secondList li:gt(2)').css('color', 'green');                     // gt/lt/eq starts with 0

$('#evod tr:even').css('color', 'cyan');
$('#evod tr:odd').css('color', 'pink');
$('#evod td').css({'border': '2px solid black', 'padding': '10px'});

$('ol li').filter(':eq(0), :eq(3), :eq(4)').css('color', 'blue');

$('#spans').children().not(':eq(2)').css('color', 'red');

$("#last").children().not('.myClass, #d1').css('color', 'green');



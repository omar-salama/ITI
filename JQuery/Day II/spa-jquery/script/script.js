function requestPage(pageURL) {        
    $.ajax({
        url: pageURL,
        type: 'GET',
        dataType: 'text',
        success: function(response) {
            console.log('The page was loaded successfully');
            $('section').html(response);
            },
            error: function(error) {
            console.log('The page didn\'t loaded', error);
            },          
            complete: function(xhr, status) {
            console.log("the request is complete!");
            }
    })
}

$('a').on('click', function(e){
    var pageRef = $(this).attr('href');
    if (pageRef != '#') {
        e.preventDefault();
        requestPage(pageRef);
    }
});

$('.dropdown>li>a').click(function(e) {
    e.stopPropagation();
    $('.dropdown-content').toggle('fast');
})

$(document).click(function() {
    $('.dropdown-content').hide('fast');
})
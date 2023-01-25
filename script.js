$(function () {
    $('#submit').on('click', function () {
        var text = $('#text');
        $("ul").append($("<li>" + text.val() + "</li>");   
    });
});
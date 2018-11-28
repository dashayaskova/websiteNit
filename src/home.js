
$(document).ready(function() {
    $(document).on('click', '.active', function(){
        $("div.container").empty();
        document.getElementsByClassName('form')[0].style.display = 'none';
        document.getElementById('main_pic').style.display = 'block';
        document.getElementsByClassName('container')[0].style.backgroundColor = 'transparent';
    });
});
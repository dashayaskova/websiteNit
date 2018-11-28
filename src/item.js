

$(document).ready(function() {
    $(document).on('click', '.product-title,.product-image', function(){
        $("div.container").empty();
        document.getElementsByClassName('form')[0].style.display = 'none';
        var $categoryId = $(this.parentNode).data('category-id');

        jQuery.ajax({
            url: 'https://nit.tron.net.ua/api/product/'+$(this.parentNode).data('product-id'),//(this).parentNode.getAttribute('data-product-id')
            //переделать категорию тоже
            method: 'get',
            dataType: 'json',
            success: function(json){

                var $cell = $('<div class="item col">');
                var $cellA = $('<h2>');
                $cell.append($cellA.text(json.name));
                var $image = $('<img class="img-fluid img">');
                $image.attr('src',json.image_url);
                $cell.append($image);
                if (json.special_price!==null) {
                    $cell.append($('<span class="last-product-price">').text(json.price));
                    $cell.append($('<span class="product-price">').text(json.special_price));
                } else {
                    $cell.append($('<span class="product-price">').text(json.price));
                }
                $cell.append($('<div class="product-desc">').text(json.description));
                $cell.append($('<button type="button" class="but-buy btn btn-secondary">').text('Buy'));
                var $but2 = $('<button type="button" class="but-back btn btn-secondary">');
                $cell.attr('data-category-id',$categoryId);
                $cell.attr('data-product-id',json.id);
                $cell.append($but2.text('Back'));

                $cell.appendTo('.container');


            },
        });
    });
});

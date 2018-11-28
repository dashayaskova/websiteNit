$(document).ready(function () {
    $(document).on('click', '.li_category,.but-back,.all', function () {

        document.getElementById('main_pic').style.display = 'none';
        document.getElementsByClassName('form')[0].style.display = 'none';
        $("div.container").empty();
        $("footer").empty();
        document.getElementsByClassName('container')[0].style.backgroundColor = '';
        var numOfCat;
        var url;

        if (this.getAttribute('class').includes('li_category') || this.getAttribute('class').includes('but-back')) {
            if (this.getAttribute('class').includes('li_category')) {
                numOfCat = $(this).data('category-id');
            } else {
                numOfCat = $(this.parentNode).data('category-id');
            }

            if (numOfCat == 0) {
                url = 'https://nit.tron.net.ua/api/product/list';
            } else {
                url = 'https://nit.tron.net.ua/api/product/list/category/' + numOfCat;
            }
        }
        else {
            numOfCat = 0;
            url = 'https://nit.tron.net.ua/api/product/list';
        }

        jQuery.ajax({
            url: url,
            method: 'get',
            dataType: 'json',
            success: function (json) {
                var $row = $('<div class="row row-flex">');
                json.forEach(function (product) {
                    var $cell = $('<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 col colho ">');
                    var $cellA = $('<a class="product-title">');
                    $cell.attr('data-product-id', product.id);
                    $cell.attr('data-category-id', numOfCat);
                    $cell.append($cellA.text(product.name));
                    var $image = $('<img class="img-fluid img product-image">');
                    $image.attr('src', product.image_url);
                    $cell.append($image);
                    if (product.special_price!==null) {
                        $cell.append($('<span class="last-product-price">').text(product.price));
                        $cell.append($('<span class="product-price">').text(product.special_price));
                    } else {
                        $cell.append($('<span class="product-price">').text(product.price));
                    }
                    $div = $('<div>');
                    $div.append($('<button type="button" class="but-buy btn btn-secondary">').text('Buy'));
                    $cell.append($div);
                    $row.append($cell);
                });
                $row.appendTo('.container');
            }
        });

        $('<p>').text("Created by Dasha Yaskova").appendTo('footer');

    });

});
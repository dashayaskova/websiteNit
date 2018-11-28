function createCart(){

    document.getElementById('main_pic').style.display = 'none';
    $("div.container").empty();

    if (!window.localStorage.cart) {
        window.localStorage.cart = '';
    }

    var $cart = window.localStorage.cart.split('|');

    if($cart.length===1){
        $("div.container").append($('<h1>').text('Your card is empty'));
        return;
    }

    document.getElementsByClassName('form')[0].style.display = 'block';

    $("div.container").append($('<h1>').text('Your cart: '));

    $cart.forEach(function (product_id){
        if(product_id=='') return;

        jQuery.ajax({
            url: 'https://nit.tron.net.ua/api/product/'+product_id,
            method: 'get',
            dataType: 'json',
            success: function(json){
                var $row = $('<div class="row li_item">');
                $row.attr('data-product-id', product_id);
                var $price;
                if (json.special_price!==null) {
                    $row.attr('data-product-price', json.special_price);
                    $price =  parseFloat(json.special_price)*parseInt(window.localStorage.getItem('cart-'+product_id));
                } else {
                    $row.attr('data-product-price', json.price);
                    $price =  parseFloat(json.price)*parseInt(window.localStorage.getItem('cart-'+product_id));
                }
                var $p = $('<div class="col-xs-4">');
                $row.append($('<div class="col-xs-4">').text(json.name));
                $p.append($('<button type="button" class="but-min btn btn-secondary">').text('-'));
                $p.append($('<span class="number">').text(window.localStorage.getItem('cart-'+product_id)));
                $p.append($('<button type="button" class="but-pls btn btn-secondary">').text('+'));
                $row.append($p);

                $div = $('<div class="col-xs-4">');
                $div.append($('<span class="price">').text($price))
                $div.append($('<button type="button" class="but-del btn btn-secondary">').text('x'))
                $row.append($div);
                $("div.container").append($row);

            },
        });
    });
}

$(document).on('click','.bask', createCart);




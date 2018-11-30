
$(document).ready(function () {

    function check() {
        var $cart = window.localStorage.cart.split('|');
        if($cart.length===1){
            $("div.container").empty();
            $("div.container").append($('<h1>').text('Your card is empty'));
            document.getElementsByClassName('form')[0].style.display = 'none';
        }
    }

    function del(product_id){
        window.localStorage.removeItem('cart-' + product_id);
        var _cart = window.localStorage.cart.split('|');
        _cart.splice(_cart.indexOf(product_id.toString()), 1);
        window.localStorage.setItem('cart', _cart.join('|'));
        $("div[data-product-id='" + product_id + "']").remove();
        check();
    }


    $(document).on('click', '.but-min', function () {

        var product_id = $(this).closest('.li_item').data('product-id');
        var price =  $(this).closest('.li_item').data('product-price');
        if (window.localStorage.getItem('cart-' + product_id) !== '1') {
            var counter = parseInt(window.localStorage.getItem('cart-' + product_id)) - 1;
            window.localStorage.setItem('cart-' + product_id, counter.toString());
            var quantity = window.localStorage.getItem('cart-' + product_id);
            $("div[data-product-id='" + product_id + "']").find('.number').text(quantity);
            var result = parseFloat(price)*quantity;
            $("div[data-product-id='" + product_id + "']").find('.price').text(result);

        } else {
      del(product_id);
        }
    });

    $(document).on('click', '.but-pls', function () {
        var product_id = $(this).closest('.li_item').data('product-id');
        var price =  $(this).closest('.li_item').data('product-price');
        var counter = parseInt(window.localStorage.getItem('cart-' + product_id)) + 1;
        window.localStorage.setItem('cart-' + product_id, counter.toString());
        var quantity = window.localStorage.getItem('cart-' + product_id);
        $("div[data-product-id='" + product_id + "']").find('.number').text(quantity);
        var result = parseFloat(price)*quantity;
        $("div[data-product-id='" + product_id + "']").find('.price').text(result);
    });

    $(document).on('click', '.but-del', function () {
        var product_id = $(this).closest('.li_item').data('product-id');
        del(product_id);

    });


    $(document).on('click', '.but-buy', function () {
        var id = $(this).closest('.col').data('product-id');

        if (!window.localStorage.cart) {
            window.localStorage.cart = '';
        }
        var _cart = window.localStorage.cart.split('|');

        if (_cart.includes(id.toString())) {

            var counter = parseInt(window.localStorage.getItem('cart-' + id)) + 1;
            window.localStorage.setItem('cart-' + id, counter.toString());


        } else {
            window.localStorage.setItem('cart-' + id, 1);
            _cart.push(id.toString());
            window.localStorage.setItem('cart', _cart.join('|'));
        }

    });
});







$(document).on('click', '.but-sub', function () {
    var $name = $('#name').val();
    var $email = $('#email').val();
    var $phone = $('#phone').val();
    var $info =  {
        'name':$name,
        'email':$email,
        'phone':$phone,
        'token':'2qh2ZPrt0hCVv5QYt1KS',
    };
    var _cart = window.localStorage.cart.split('|');
    _cart.forEach(function (product_id){
        if(product_id=='') return;
        $info['products['+product_id+']']=window.localStorage.getItem('cart-' + product_id);
    });

    console.log($info);

    jQuery.ajax({
        url: 'https://nit.tron.net.ua/api/order/add',
        method: 'post',
        dataType: 'json',
        data: $info,
        success:function(json){

            if(json.status==='success') {
                $("div.container").empty();
                document.getElementsByClassName('form')[0].style.display = 'none';
                $("div.container").append($('<h1>').text('Your request is successful'));
                localStorage.clear();
            }else if(json.status==='error'){

                if(json.errors.name!==undefined)alert(json.errors.name);
                if(json.errors.email!==undefined) alert(json.errors.email);
                if(json.errors.phone!==undefined)alert(json.errors.phone);

            }

        }
    });


});

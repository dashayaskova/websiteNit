import './scss/main.scss';
import './items.js';
import './item.js';
import './home.js';
import './min_pls.js';
import './cart.js';
import './post.js';

console.log('Hello!');
console.log(`The time is ${new Date()}`);
jQuery.ajax({
    url: 'https://nit.tron.net.ua/api/category/list',
    method: 'get',
    dataType: 'json',
    success: function(json){

        json.forEach(function(product){
            var $li_category = $('<li class="li_category">');
            $li_category.attr('data-category-id',product.id);
            $li_category.append($('<a class="a_category" > ').text(product.name));
            $li_category.appendTo('.dropdown-menu');
        });
    },
});


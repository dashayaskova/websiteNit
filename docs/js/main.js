!function (t) {
    var e = {};

    function a(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {i: n, l: !1, exports: {}};
        return t[n].call(o.exports, o, o.exports, a), o.l = !0, o.exports
    }

    a.m = t, a.c = e, a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, a.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, a.t = function (t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var o in t) a.d(n, o, function (e) {
            return t[e]
        }.bind(null, o));
        return n
    }, a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "", a(a.s = 0)
}([function (t, e, a) {
    "use strict";
    a.r(e);
    a(1), a(2), a(3), a(4), a(5), a(6), a(7);
    jQuery.ajax({
        url: "https://nit.tron.net.ua/api/category/list",
        method: "get",
        dataType: "json",
        success: function (t) {
            t.forEach(function (t) {
                var e = $('<li class="li_category">');
                e.attr("data-category-id", t.id), e.append($('<a class="a_category" > ').text(t.name)), e.appendTo(".dropdown-menu")
            })
        }
    })
}, function (t, e, a) {
}, function (t, e) {
    $(document).ready(function () {
        $(document).on("click", ".li_category,.but-back,.all", function () {
            var t, e;
            document.getElementById("main_pic").style.display = "none", document.getElementsByClassName("form")[0].style.display = "none", $("div.container").empty(), $("footer").empty(), document.getElementsByClassName("container")[0].style.backgroundColor = "", this.getAttribute("class").includes("li_category") || this.getAttribute("class").includes("but-back") ? e = 0 == (t = this.getAttribute("class").includes("li_category") ? $(this).data("category-id") : $(this.parentNode).data("category-id")) ? "https://nit.tron.net.ua/api/product/list" : "https://nit.tron.net.ua/api/product/list/category/" + t : (t = 0, e = "https://nit.tron.net.ua/api/product/list"), jQuery.ajax({
                url: e,
                method: "get",
                dataType: "json",
                success: function (e) {
                    var a = $('<div class="row row-flex">');
                    e.forEach(function (e) {
                        var n = $('<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 col colho ">'),
                            o = $('<a class="product-title">');
                        n.attr("data-product-id", e.id), n.attr("data-category-id", t), n.append(o.text(e.name));
                        var r = $('<img class="img-fluid img product-image">');
                        r.attr("src", e.image_url), n.append(r), null !== e.special_price ? (n.append($('<span class="last-product-price">').text(e.price)), n.append($('<span class="product-price">').text(e.special_price))) : n.append($('<span class="product-price">').text(e.price)), $div = $("<div>"), $div.append($('<button type="button" class="but-buy btn btn-secondary">').text("Buy")), n.append($div), a.append(n)
                    }), a.appendTo(".container")
                }
            }), $("<p>").text("Created by Dasha Yaskova").appendTo("footer")
        })
    })
}, function (t, e) {
    $(document).ready(function () {
        $(document).on("click", ".product-title,.product-image", function () {
            $("div.container").empty(), document.getElementsByClassName("form")[0].style.display = "none";
            var t = $(this.parentNode).data("category-id");
            jQuery.ajax({
                url: "https://nit.tron.net.ua/api/product/" + $(this.parentNode).data("product-id"),
                method: "get",
                dataType: "json",
                success: function (e) {
                    var a = $('<div class="item col">'), n = $("<h2>");
                    a.append(n.text(e.name));
                    var o = $('<img class="img-fluid img">');
                    o.attr("src", e.image_url), a.append(o), null !== e.special_price ? (a.append($('<span class="last-product-price">').text(e.price)), a.append($('<span class="product-price">').text(e.special_price))) : a.append($('<span class="product-price">').text(e.price)), a.append($('<div class="product-desc">').text(e.description)), a.append($('<button type="button" class="but-buy btn btn-secondary">').text("Buy"));
                    var r = $('<button type="button" class="but-back btn btn-secondary">');
                    a.attr("data-category-id", t), a.attr("data-product-id", e.id), a.append(r.text("Back")), a.appendTo(".container")
                }
            })
        })
    })
}, function (t, e) {
    $(document).ready(function () {
        $(document).on("click", ".active", function () {
            $("div.container").empty(), document.getElementsByClassName("form")[0].style.display = "none", document.getElementById("main_pic").style.display = "block", document.getElementsByClassName("container")[0].style.backgroundColor = "transparent"
        })
    })
}, function (t, e) {
    $(document).ready(function () {
        function t() {
            1 === window.localStorage.cart.split("|").length && ($("div.container").empty(), $("div.container").append($("<h1>").text("Your card is empty")), document.getElementsByClassName("form")[0].style.display = "none")
        }

        $(document).on("click", ".but-min", function () {
            var e = $(this).closest(".li_item").data("product-id"),
                a = $(this).closest(".li_item").data("product-price");
            if ("1" !== window.localStorage.getItem("cart-" + e)) {
                var n = parseInt(window.localStorage.getItem("cart-" + e)) - 1;
                window.localStorage.setItem("cart-" + e, n.toString());
                var o = window.localStorage.getItem("cart-" + e);
                $("div[data-product-id='" + e + "']").find(".number").text(o);
                var r = parseFloat(a) * o;
                $("div[data-product-id='" + e + "']").find(".price").text(r)
            } else {
                window.localStorage.removeItem("cart-" + e);
                var c = window.localStorage.cart.split("|");
                c.splice(c.indexOf(e.toString()), 1), window.localStorage.setItem("cart", c.join("|")), $("div[data-product-id='" + e + "']").remove(), t()
            }
        }), $(document).on("click", ".but-pls", function () {
            var t = $(this).closest(".li_item").data("product-id"),
                e = $(this).closest(".li_item").data("product-price"),
                a = parseInt(window.localStorage.getItem("cart-" + t)) + 1;
            window.localStorage.setItem("cart-" + t, a.toString());
            var n = window.localStorage.getItem("cart-" + t);
            $("div[data-product-id='" + t + "']").find(".number").text(n);
            var o = parseFloat(e) * n;
            $("div[data-product-id='" + t + "']").find(".price").text(o)
        }), $(document).on("click", ".but-del", function () {
            var e = $(this).closest(".li_item").data("product-id");
            window.localStorage.removeItem("cart-" + e);
            var a = window.localStorage.cart.split("|");
            a.splice(a.indexOf(e.toString()), 1), window.localStorage.setItem("cart", a.join("|")), $("div[data-product-id='" + e + "']").remove(), t()
        })
    })
}, function (t, e) {
    $(document).on("click", ".bask", function () {
        document.getElementById("main_pic").style.display = "none", $("div.container").empty(), window.localStorage.cart || (window.localStorage.cart = "");
        var t = window.localStorage.cart.split("|");
        1 !== t.length ? (document.getElementsByClassName("form")[0].style.display = "block", $("div.container").append($("<h1>").text("Your cart: ")), t.forEach(function (t) {
            "" != t && jQuery.ajax({
                url: "https://nit.tron.net.ua/api/product/" + t,
                method: "get",
                dataType: "json",
                success: function (e) {
                    var a, n = $('<div class="row li_item">');
                    n.attr("data-product-id", t), null !== e.special_price ? (n.attr("data-product-price", e.special_price), a = parseFloat(e.special_price) * parseInt(window.localStorage.getItem("cart-" + t))) : (n.attr("data-product-price", e.price), a = parseFloat(e.price) * parseInt(window.localStorage.getItem("cart-" + t)));
                    var o = $('<div class="col-xs-4">');
                    n.append($('<div class="col-xs-4">').text(e.name)), o.append($('<button type="button" class="but-min btn btn-secondary">').text("-")), o.append($('<span class="number">').text(window.localStorage.getItem("cart-" + t))), o.append($('<button type="button" class="but-pls btn btn-secondary">').text("+")), n.append(o), $div = $('<div class="col-xs-4">'), $div.append($('<span class="price">').text(a)), $div.append($('<button type="button" class="but-del btn btn-secondary">').text("x")), n.append($div), $("div.container").append(n)
                }
            })
        })) : $("div.container").append($("<h1>").text("Your card is empty"))
    })
}, function (t, e) {
    $(document).on("click", ".but-sub", function () {
        var t = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            token: "2qh2ZPrt0hCVv5QYt1KS"
        };
        window.localStorage.cart.split("|").forEach(function (e) {
            "" != e && (t["products[" + e + "]"] = window.localStorage.getItem("cart-" + e))
        }), console.log(t), jQuery.ajax({
            url: "https://nit.tron.net.ua/api/order/add",
            method: "post",
            dataType: "json",
            data: t,
            success: function (t) {
                "success" === t.status ? ($("div.container").empty(), document.getElementsByClassName("form")[0].style.display = "none", $("div.container").append($("<h1>").text("Your request is successful")), localStorage.clear()) : "error" === t.status && (void 0 !== t.errors.name && alert(t.errors.name), void 0 !== t.errors.email && alert(t.errors.email), void 0 !== t.errors.phone && alert(t.errors.phone))
            }
        })
    })
}]);
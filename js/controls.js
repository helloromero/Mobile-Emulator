var zoom_val = 100;

$("#zoom_up, .fa-plus").click(function() {
    zoom_val += 5;
    if (zoom_val >= 150) {
        zoom_val = 150;
    }
    $("body").css("zoom", zoom_val + "%");
});

$("#zoom_down, fa-minus").click(function() {
    zoom_val -= 5;
    if (zoom_val <= 90) {
        zoom_val = 90;
    }
    $("body").css("zoom", zoom_val + "%");
});

$("#reload, #go_back, #go_forward").click(function() {

    var c = $(event.target)[0].id;

    if (c == "reload" || c == "refresh") {

        document.getElementById('website').src = document.getElementById('website').src;
    }

    if (c == "go_back" || c == "l") {

        window.history.back();
    }

    if (c == "go_forward" || c == "r") {

        window.history.forward();
    }
});
$(document).ready(function() {
    $('.ikona').click(function() {
        $("#mojaNavigacija").toggleClass("responsive");
    });

    $('.btn_kontakt').click(function() {
        var email_validacija = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if ($('#exampleInputName1').val() != '') {
            $("#poruka-Ime").html("");
        }
        if ($('#exampleInputEmail1').val() != '') {
            $("#poruka-Email").html("");
        }
        if ($('#exampleInputSubject1').val() != '') {
            $("#poruka-Naslov").html("");
        }
        if ($('#exampleFormControlTextarea1').val() != '') {
            $("#poruka-Poruka").html("");
        }

        if ($('#exampleInputName1').val() == '') {
            $("#poruka-Ime").html("Niste uneli ime i prezime!");
            return false;
        } else if ($('#exampleInputEmail1').val() == '') {
            $("#poruka-Email").html("Niste uneli email!");
            return false;
        } else if ($('#exampleInputSubject1').val() == '') {
            $("#poruka-Naslov").html("Niste uneli naslov poruke!");
            return false;
        } else if ($('#exampleFormControlTextarea1').val() == '') {
            $("#poruka-Poruka").html("Niste uneli poruku!");
            return false;
        } else if (!$('#exampleInputEmail1').val().match(email_validacija)) {
            $("#poruka-Email").html("Email nije validan!");
            return false;
        } else {
            $('#modalniProzor').modal('show');
            return true;
        }
    });

    $(".img-wrapper").hover(
        function() {
            $(this).find(".img-overlay").animate({ opacity: 1 }, 600);
        },
        function() {
            $(this).find(".img-overlay").animate({ opacity: 0 }, 600);
        }
    );
    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

    $overlay.append($image).append($exitButton);
    $("#gallery").append($overlay);

    $overlay.hide();

    $(".img-overlay").click(function(event) {
        var imageLocation = $(this).prev().attr("href");
        $image.attr("src", imageLocation);
        $overlay.fadeIn("slow");
    });
    $overlay.click(function() {
        $(this).fadeOut("slow");
    });
});
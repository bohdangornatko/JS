$(document).ready(function() {
    
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    var handler = function(e){
        e.preventDefault();

	    $.ajax({
			url: 'ajaxtest.php',
			type: "POST",
			data: {
				user_name: $( "input[name='user_name']" ).val(),
				user_email: $( "input[name='user_email']" ).val(),
				user_phone: $( "input[name='user_phone']" ).val()
			},
			success: function(data) {
				if (data.status == 'ok') {
					$("#status").text("Вы успешно отправили данные!").css("color", "green");
				} else {
					$("#status").text("Вы допустили ошибку!").css("color", "red");
				}
				$('#callbeckform')[0].reset();
			},
			dataType: "json"
		});

    };

    $("#callbeckform").find("button[type=submit]").click(handler);
});
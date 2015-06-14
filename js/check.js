$( document ).ready(function() {
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	if (is_chrome == false){
		$('#notice').css('display', 'block');
	}
});

$('#notice_btn').click(function(){
	$('#notice').css('display', 'none');
});
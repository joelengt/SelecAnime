$('#move').on("click",function(){
	$(function(){
		$.get('ajax.html',function(code){
		$('div').append(code);
	   });
	});

});
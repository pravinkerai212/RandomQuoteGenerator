$(document).ready(function() {
	$('#newquote').click(function() {
		getRandomQuote();
	});
});

// ajax function which makes api call to random-famous-quote-api
function getRandomQuote() {
	var color = ['#263238', '#212121', '#3E2723', '#BF360C', '#E65100', '#FF6F00', '#F57F17', '#827717', '#004D40', '#006064', '#01579B', '#0D47A1', '#1A237E', '#311B92', '#4A148C', '#880E4F'];
	var index = color[Math.floor(Math.random()*color.length)];

	$.ajax({
		url: 'https://talaikis.com/api/quotes/random',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			var quote = data.quote;
			var author = data.author;
			$('.quote #data').html(quote);
			$('.quote h4').html("-"+author);
			$('body').css('background-color', index);
			$('.col').css('background-color', index);
			$('.socialmedia a').css('background-color', index);
			$('#newquote').css('color', 'white');
			$('.color').css('color', index);
			$('#twitter').attr('href',"https://twitter.com/intent/tweet?text="+quote+" "+author);
		},
		error: function(err) {
			$('.quote #data').html('Oops something went wrong.');
		}
	});
}
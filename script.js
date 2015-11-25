$(document).ready(function() {

	//makec bold all clicked table cell 
	$("td").click(function() {
		$(this).css('font-weight', 'bold');
	});

	//Highlight children of list
	$("#children").click(function(){	
		$("#list").children("div").children().css({"color": "red"});
	});

	//Random table cell color  on hover 
	$("td").hover(
	function () {
		var color = getRandomColor();
		$(this).css('color', color); 
	}
	);

});

//change color function
function changeColor(){
	//alert("Hello! I am an alert box!!");
	//$(h1).css('color','red');
	var color = getRandomColor();
	document.getElementById('title').style.color = color;
 }

//get a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}







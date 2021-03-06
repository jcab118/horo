module.exports = (obj) => {
	var str = "<html>";
	str += "<head><title>" + obj.zodiac + " Page</title>";
	str += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>";
	str += '<link rel="stylesheet" type="text/css" href="../../../public/css/zodiac.css"></head>';
	str += '<div class="wrapper">';
	str += '<h1 class= "top-header" style="display: inline;">ZODIAQUE</h1>';
	str += '<img src="../../../public/img/zodiac.png" style="display: inline;" alt="logo">';
	str += '</div>';
	str += '<body><div class="container"><h1 class="sign-indicator">What\'s up ' + obj.zodiac + '!' + '</h1><br>';
	str += '<div class="well">';
	str += '<h3 class="zodiac-header"><span class="spanOne">Zodiac:</span> ' + obj.zodiac + '</h3>';
	str += '<h3><span class="spanTwo">Todays Horoscope:</span> ' + obj.todays_horoscope + '</h3>';
  str += '<h3><span class="spanThree">Description:</span> ' + obj.description + '</h3>';
  str += '<h3><span class="spanFour">Date-Range:</span> ' + obj.date_range + '</h3>';
	str += '</div>';
	str += '<div class="btn-group" role="group" aria-label="Basic example">';
	str += '<a id="home-button" href="/" type="button" class="btn btn-primary sign-buttons">';
	str += '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>';
	str += '</a>';
	str += '</div></div>';
	str += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>";
	str += "<script src='../../client/js/zodiac.js'></script>";
	str += "</body></html>";
	return str;
};
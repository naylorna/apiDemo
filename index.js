var request = require("request");

var options = {
  method: 'GET',
  url: 'https://genius.p.rapidapi.com/artists/16775',
  headers: {
    'x-rapidapi-host': 'genius.p.rapidapi.com',
    'x-rapidapi-key': '4e646a0679msh6adc5431da3ebd5p1321dejsna473e2d5f6ed',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

	
		
	


		



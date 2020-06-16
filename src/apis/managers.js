import axios from 'axios';

export default axios.create({
  async: true,
	crossDomain: true,
	baseURL: "https://api-football-v1.p.rapidapi.com/v2/coachs/search/",
	method: "GET",
	headers: {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "458f87cbfdmsh0d4b3c614d18916p1dc89djsn0a185bdf4ca9",
		'useQueryString': true,
	}
})
'use strict';

const LolApi = require('leagueapi');

const Env = use('Env');


LolApi.init(Env.get('API_KEY'), 'br');


class SummonersController {
  
    *getByName (request, response) {
    	const summoner = request.param('summoner')


   	 LolApi.Summoner.getByName(summoner, (err, summoner) => {
   	 	if(!err) {
   	 		return response.json(summoner)
   	 	}
   	 })

	}
}

module.exports = SummonersController

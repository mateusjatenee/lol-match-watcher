'use strict';

const lol = require('leagueapi');

const Env = use('Env');


lol.init(Env.get('API_KEY'), 'br');


class SummonersController {
  
    *getByName (request, response) {
    	const summoner = request.param('summoner')

    	const getGame = (id, region) => {
    		lol.getCurrentGame(id, region, (err, game) => {
    			console.log(game)
    		});
    	}


   	 lol.Summoner.getByName(summoner, (err, response) => {
   	 	if(!err) {
   	 		let summ = response[summoner]
   	 		console.log(summ)
   	 		return getGame(summ.id, 'br')
   	 	}
   	 })

	}
}

module.exports = SummonersController

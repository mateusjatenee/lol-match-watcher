'use strict'

const LolApi = require('leagueapi')

const Env = use('Env')


LolApi.init(Env.get('API_KEY'), 'br')


class SummonersController {
  
    *getByName (request, response) {

    }
}

module.exports = SummonersController

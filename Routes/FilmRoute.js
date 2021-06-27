var {getFilms}= require('../Controllers/FilmController')
const API_Key= '42671e7ca43d48de807785cf141d2b85'
const API_Path='https://api.themoviedb.org/3/movie/popular?api_key='+API_Key+'&language=en-US&page=1'

function init(router){
    router.route('/Films').get(getFilms) 

}
module.exports.init=init
 
var FilmModel = require('../Models/FilmModel');
 //{id,title,genre_ids,release_date,popularity,vote_average,vote_count}
 const API_Key= '42671e7ca43d48de807785cf141d2b85'
 var https = require('https');
const { exitCode } = require('process');
var getFilms = (req, res) => { https.get('https://api.themoviedb.org/3/movie/popular?api_key=42671e7ca43d48de807785cf141d2b85&language=en-US&page=1', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    let i=0; 
    let tab=new Array();
    const dataObj = JSON.parse(data)
    let obj={}
   
   while(dataObj.results[i]){

    obj.id=dataObj.results[i].id,
    obj.title=dataObj.results[i].title
     obj.genre_ids=dataObj.results[i].genre_ids
     obj.release_date=dataObj.results[i].release_date
     obj.popularity=dataObj.results[i].popularity
     obj.vote_average=dataObj.results[i].vote_average
     obj.vote_count=dataObj.results[i].vote_count
     tab.push(obj)
     i++;
   }
   //const result= data.map(x =>{addFilm});
   console.log(tab);
   res.send(tab)


  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
    
   
}

module.exports = {getFilms}
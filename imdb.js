var search=document.getElementById("search");
search.addEventListener("keyup", e=>{

var searchText=e.target.value;
//console.log(searchText);
getMovies(searchText);
});
function getMovies(searchText){
const imdpApi=`http://www.omdbapi.com/?s=${searchText}&apikey=5ac8ec5f`;
window.fetch(imdpApi)
.then(movies=>{
    movies
    .json()
    .then(data=>{
        //console.log(data.Search);
        const[...movieData]=data.Search;
        var output=[];
        for(let movie of movieData){
            output +=`
            <div class="container">
             <section id="movies">
              <h1>${movie.Title}</h1>
              <span class="badge badge-success">${movie.Year}</span>
              <!--<span class="badge badge-primary">${movie.Rated}</span>-->
              <!--<span class="badge badge-info">${movie.Released}</span>-->
              <!--<span class="badge badge-dark">${movie.Runtime}</span>-->
              <!--<span class="badge badge-danger">${movie.Genre}</span>-->
              <p>
              <img src="${movie.Poster}" class="img-Poster"/>
              <p>${movie.imdbID}</p>
              <p>${movie.Type}</p>
              <p>${movie.Plot}</p>
              <p><button class="btn btn-dark btn-block">
              go to movies</button></P>
              </p>
              </section>
             </div>
              `;
              document.getElementById("template").innerHTML=output;
        }
    })
        .catch(err=>console.log(err));
})
.catch(err=>console.log(err));
}
//http://www.omdbapi.com/?s=don&apikey=5ac8ec5f
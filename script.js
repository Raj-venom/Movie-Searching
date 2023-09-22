const trendApi = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieList = document.querySelector('#movie-list');



async function getMovie(url){
    let responce = await fetch(url);
    let data = await responce.json()

    console.log(data.results)
    showMovies(data.results)

}


function showMovies(data){

        data.forEach((item) =>{

            const box = document.createElement("div");
            box.classList.add("box");

            box.innerHTML=`
            <img id="img"
            src='https://static.toiimg.com/photo/msid-103359834/103359834.jpg'
            alt=""
          />
            <div class="overlay">

            <div id="title-box">

            <div>
              <p id="title">Movie title</p>
            </div>
            <div class="div">
              <p id="rate" >rating: 2.5</p>
            </div>
            </div>

            <div class="overview">
              <p  id="overview" >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Totam dicta fuga numquam ipsa assumenda neque dolorem quidem
                unde, sunt, molestiae nemo sed id placeat eaque sint laborum
                consectetur. Ut, repudiandae!                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Totam dicta fuga numquam ipsa assumenda neque dolorem quidem
                unde, sunt, molestiae nemo sed id placeat eaque sint laborum
                consectetur. Ut, repudiandae!
              </p>
            </div>`

        //   movieList.appendChild(box)
        movieList.appendChild(box)
        })
}





// Initial call to call treading movie
getMovie(trendApi)
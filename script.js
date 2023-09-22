const trendApi =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const searchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieList = document.querySelector("#movie-list");

async function getMovie(url) {
  let responce = await fetch(url);
  let data = await responce.json();

  console.log(data.results);
  showMovies(data.results);
}

function showMovies(data) {
  movieList.innerHTML = ``;
  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");

    let imgLink;
    if(item.poster_path == null){
      imgLink = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
    }else{
      imgLink = `${IMGPATH + item.poster_path}`
    }
    box.innerHTML = `
            <img id="img"
            src=${imgLink}
            alt=""
          />
            <div class="overlay">

            <div id="title-box">

            <div>
              <p id="title">${item.original_title}</p>
            </div>
            <div class="div">
              <p id="rate" >Rating:${(item.vote_average).toFixed(1)}</p>
            </div>
            </div>
            <div class="overview">
              <p  id="overview" >
                ${item.overview}
              </p>
            </div>`;

    //   movieList.appendChild(box)
    movieList.appendChild(box);
  });
}
const search = document.querySelector("#search");
search.addEventListener("keyup", () => {
  // console.log(search.value)

  // if some vlaue entered in search box then only seach api function will called
  if (search.value != "") {
    getMovie(searchApi + search.value);
  } else {
    getMovie(trendApi);  // calling popular movies
  }
});

// Initial call to call treading movie
getMovie(trendApi);

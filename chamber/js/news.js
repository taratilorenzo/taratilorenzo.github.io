const newsURL = "https://newsdata.io/api/1/news?apikey=pub_891699ae42c4660eab3b405eba4646ea8442&q=pegasus&language=en"

fetch(newsURL)
    .then((response) => response.json())
    .then((newsRelease) => {
        console.log(newsRelease);
        document.querySelector(".news-title").innerHTML = newsRelease.results[0].title;
        document.querySelector(".news").innerHTML = newsRelease.results[0].link;
        document.querySelector(".news").setAttribute("href", "newsRelease.results[0].link");
    });
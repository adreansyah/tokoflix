export const DiscoverMovie  = async (counter) => {
    const Api = {
        URL:'https://api.themoviedb.org/3/discover/movie?api_key=b934e8458371646dbb237109a55738b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'
    }  
    const rawResponse = await fetch(Api.URL, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({page: counter})
    });
    const content = await rawResponse.json();
    return content;    
}
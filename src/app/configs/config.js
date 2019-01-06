export const DiscoverMovie  = async (counter) => {    
    const Api = {
        URL:'https://api.themoviedb.org/3/discover/movie?api_key=b934e8458371646dbb237109a55738b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+counter+''
    }  
    const rawResponse = await fetch(Api.URL, { data: { page: counter } });
    const content = await rawResponse.json();
    return content;    
}

export const DetailMovie = async (counter) => {    
    const Api = {
        URL:'https://api.themoviedb.org/3/movie/'+counter+'?api_key=b934e8458371646dbb237109a55738b1&language=en-US'
    }  
    const rawResponse = await fetch(Api.URL, { data: { page: counter } });
    const content = await rawResponse.json();
    return content; 
}
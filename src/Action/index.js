const LOAD_DATA = "LOAD_DATA";

export const LoadScrollData = (item)=>{
    return async(dispatch)=>{
        const Api = {
            URL:'https://api.themoviedb.org/3/discover/movie?api_key=b934e8458371646dbb237109a55738b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+item+''
        }  
        const rawResponse = await fetch(Api.URL, { data: { page: item } });
        const content = await rawResponse.json();
        dispatch({
            type: "FETCH_ITEMS"
        });
        dispatch(itemsReceived(content));
    }
}

const itemsReceived = (items)=> {
    return {
        type: "LOAD_RECEIVED",
        payload: {
            items: items
        }
    }
}
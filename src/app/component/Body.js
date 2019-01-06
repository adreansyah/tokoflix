import React from 'react'; 
import {DiscoverMovie} from '../configs/config';
import {Pricing,Splitingdate,Replacingstring} from '../configs/MainFunctions';

class Body extends React.Component {
    constructor() {
        super();       
        this.state = {
            page:1,
            data:[],          
            message:'not at bottom',
            isLoading: false,
            isMounted: false,
        };
        this._isMounted  = false;
        this.onScroll    = this.onScroll.bind(this); 
        this.handleClick = this.handleClick.bind(this);    
    }

    componentWillMount(){   
        DiscoverMovie(this.state.page).then((res) => this.setState(
            {
                data: res.results,    
                isLoading: false,    
                isMounted: true,        
            }
        ));                
        this.state.isMounted;
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount(){     
        this.state.isMounted;
        window.addEventListener('scroll', this.onScroll, false);
    }

    onScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body         = document.body;
        const html         = document.documentElement;
        const docHeight    = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;

        if (windowBottom >= docHeight) {            
            this.setState({
                page:this.state.page +1,
                isLoading: false,
            });            
            let {history} = this.props;                    
            history.push({
                search: '?page='+this.state.page+'',
            });  
            DiscoverMovie(this.state.page).then((res) => {                                
                const nextUsers = res.results.map(val => ({
                    adult: val.adult,
                    backdrop_path: val.backdrop_path,
                    genre_ids: val.genre_ids,
                    id: val.id,
                    original_language: val.original_language,
                    original_title: val.original_title,
                    overview: val.overview,
                    popularity: val.popularity,
                    poster_path: val.poster_path,
                    release_date: val.release_date,
                    title: val.title,
                    video: val.video,
                    vote_average: val.vote_average,
                    vote_count: val.vote_count
                }));                          
             
                this.setState({    
                  isLoading: false,         
                  data:[
                      ...this.state.data,
                      ...nextUsers,
                  ],
                });
            })              
        }               
    } 

    handleClick (id,title){
        let {history} = this.props;
        let plug = Replacingstring(title)
        history.push({
            pathname: id,
            search: '?title='+plug+'',
        });        
    }

    render() {                                                      
        return (
            <section className="content">                      
                <div className="row margin">                                          
                    <Layout data={this}/>
                </div> 
                {
                this.state.isLoading &&
                <div>Loading...</div>
                }          
            </section>
        )
    }
}

const Layout = (props) =>{      
    let {data} = props.data.state;     
    let state  = props.data;   
    let URI    = 'https://image.tmdb.org/t/p/w500';
    return(
        <div className="col-md-12">              
            {                        
                data.map((item, index) => (                            
                    <div className="col-md-3" key={index}>  
                        <div className="margin border-list red-tooltip" data-html="true" data-placement="top" data-toggle="tooltip" title={ "Synopsis : "+item.overview }>
                            <div className="cont-im">
                                <div className="rating-durasi">
                                    <span className="ml-rating">
                                        <i className="fa fa-star text-yellow"></i> {item.vote_average}
                                    </span>
                                </div>
                                    <img src={URI+item.backdrop_path} className="image-list" width="auto" height="300" />
                                    <div className="price">
                                        <span className="ml-price">
                                        Price: {Pricing(item.vote_average)}
                                        </span>
                                    </div>
                                <div onClick={() => state.handleClick(item.id,item.title)} className="middle">
                                    <div className="cursor text"><i className="fa fa-play text-aqua" aria-hidden="true"></i></div>
                                </div>
                                <div className="text-center pad">
                                    <div className="title-list">
                                        <div className="pad"><small><b>{item.title+' ('+Splitingdate(item.release_date)+')'}</b></small></div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>                          
                ))
            }                                                                                                                                             
        </div>  
    )
}

export default Body; 

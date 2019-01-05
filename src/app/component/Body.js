import React from 'react'; 
import {DiscoverMovie} from '../configs/config';
import {Pricing} from '../configs/MainFunctions';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            page:1,
            data:[],
            test:[],
        };
    }

    componentWillMount(){
        DiscoverMovie(this.state.page).then((res) => this.setState(
            {
                data: res.results,                
            }
        ));
           
    }

    componentWillUnmount(){
        console.log("STOP");
    }
  
    render() {            
        let {data} = this.state;
        let URI    = 'https://image.tmdb.org/t/p/w500';
        console.log(this.state.test);
        return (
            <section className="content">                      
                <div className="row margin">                    
                    {                        
                        data.map((item, index) => (
                            <div className="col-md-3 " key={index}>  
                                <div className="margin border-list">
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
                                        <div className="middle">
                                            <div className="cursor text"><i className="fa fa-play text-aqua" aria-hidden="true"></i></div>
                                        </div>
                                        <div className="text-center">
                                            <small><b>{item.title}</b></small>
                                        </div>
                                    </div>
                                </div>   
                            </div>                          
                        ))
                    }                                                                                                                                             
                </div>                
            </section>
        )
    }
}

export default Body; 

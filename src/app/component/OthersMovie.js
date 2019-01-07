import React from 'react'; 
import {SameDetail} from '../configs/config';
// import {Pricing} from '../configs/MainFunctions';
import {Pricing,Splitingdate} from '../configs/MainFunctions';


class OthersMovie extends React.Component {    
    constructor(){
        super();
        this.state = {
            data:[],                 
        }       
    }

    componentWillMount(){       
        SameDetail(this.props.id).then((res) => this.setState(
            {
                data: res.results,    
                isLoading: false,                        
            }
        ));    
    }

    render(){                      
        let {data} = this.state;   
        // console.log(data.length);           
        let URI    = 'https://image.tmdb.org/t/p/w500';     
        if(data.length === 0 ){
            return (
                <div>hellw</div>
            )
        } 
        else{
            return(
                <div className="row">
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
                                        <div className="middle">
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
                </div>
            )   
        }        
    }
}

export default OthersMovie;
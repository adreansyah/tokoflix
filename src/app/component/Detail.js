import React from 'react'; 
import MDSpinner from "react-md-spinner";
import {DetailMovie} from '../configs/config';
import {Pricing} from '../configs/MainFunctions';

class Detail extends React.Component {    
    constructor(){
        super();
        this.state = {
            data:[],
            loading:true,            
        }
        this._isMounted = false;
    }

    componentWillMount(){        
        this._isMounted = true;  
        let { page } = this.props.match.params;    
        if (this._isMounted) {  
            DetailMovie(page).then((res) => setTimeout(() => { 
                this.setState(() => ({
                    data:res,
                    loading: false
                }))
            },2000));   
        }       
    }

    componentWillUnmount(){
        this._isMounted = false;
        console.log('STOP');
    }
    render(){        
        let {loading,data} = this.state;
        return(
            <section className="content">
                {
                    (loading=== true)?<div className="loader text-center"><MDSpinner/></div>
                    :<ViewsDetail data={data} history={this}/> 
                }
            </section>            
        )
    }
}

const ViewsDetail = (props)=>{                                      
    return(
        <div>
            <div className="row margin">    
                <Poster data={props.data}/>   
                <Summary data={props.data}/>                    
                <Indicator/> 
                <PriceList data={props.data}/>                                                         
            </div>
            <hr/>
            <div className="row margin">         
            </div>            
        </div>

    )
}
const Poster =(list) =>{   
    let {
        poster_path,
        vote_average
    } = list.data;
    let URI   = 'https://image.tmdb.org/t/p/w500';
    return(
        <div className="col-md-3">
            <div className="box box-info box-solid">                    
                <div className="box-body no-padding">
                    <div className="text-center">
                        <div className="rating-durasi">
                            <span className="ml-rating-detail">
                                <i className="fa fa-star text-yellow"></i> {vote_average}
                            </span>
                        </div>
                        <img src={URI+poster_path} className="image-list" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const Summary = (list) =>{
    let {      
        original_title,
        overview,
        genres,
        status,
        production_companies,
        tagline,      
    } = list.data;
    return(
        <div className="col-md-6">
            <div className="box box-info">
                <div className="box-header with-border">
                    <h1 className="box-title"><i className="fa fa-bookmark text-aqua"></i> {original_title}</h1>
                </div>
                <div className="box-body">
                    <div className="text-center">
                        <h4><i className="fa fa-tag text-aqua"></i> <i>"{tagline}"</i></h4>
                    </div>  
                    <hr/>                      
                    <p><b> <i className="fa fa-location-arrow  text-aqua"></i> Status : {status}</b></p>
                    <hr/>
                    <p><b> <i className="fa fa-location-arrow  text-aqua"></i> Genres : </b> {                                  
                        genres.map(function(item){                                                          
                            return  item.name + ', '
                        })                                                 
                    }                        
                    </p>                        
                    <hr/>
                    <p> <i className="fa fa-location-arrow text-aqua"></i> <b>Overview : </b></p>
                    <p className="synopsis">{overview}</p>
                    <hr/>
                    <p> <i className="fa fa-location-arrow  text-aqua"></i> <b>Production Company :</b> {production_companies[0].name+' & '+production_companies[1].name}</p>
                </div>
            </div>
        </div> 
    )
}

const PriceList = (list)=>{
    let {      
        vote_average
    } = list.data; 
    return(
        <div className="col-md-3">
            <div className="box box-info box-solid">
                <div className="box-body">
                    <div className="price-detail text-center">
                        <i className="fa fa-tag"></i> <b>Price :  {Pricing(vote_average)}</b>
                    </div>
                </div>
                <div className="box-footer">
                    <button className="btn bg-teal btn-block"><i className="fa fa-cart-plus"></i> <b>Buy</b></button>
                </div>
            </div>
        </div> 
    )
}

const Indicator = ()=>{
    return(
        <div className="col-md-3">
            <div className="box box-danger box-solid">
                <div className="box-body text-center text-red">                
                    <p>Click buy to collecting this movie</p>
                    <p>You dont Have this movie in your collection</p>
                    <p><i className="fa fa-chevron-down"></i></p>
                </div>                
            </div>
        </div> 
    )
}

export default Detail;
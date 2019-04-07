import React from 'react'; 
import {DiscoverMovie} from '../configs/config';
import {Pricing,Splitingdate,Replacingstring} from '../configs/MainFunctions';
import {connect} from 'react-redux';
import { LoadScrollData } from '../../Action';
import LazyLoad from 'react-lazy-load';

class Body extends React.Component {
    constructor(props) {
        super(props);       
        this.state = {
            page:1,
            data:[],          
            message:'not at bottom',
            isLoading: false,            
        };        
        this.onScroll    = this.onScroll.bind(this); 
        this.handleClick = this.handleClick.bind(this);    
    }    

    componentDidMount(){                     
        window.addEventListener('scroll', this.onScroll, false);
        this.props.LoadScrollData(this.state.page);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        const {LoadScrollPage} = nextProps.LoadPage;
        console.log(LoadScrollPage);
        this.setState(
            {
                data: LoadScrollPage.items,    
                isLoading: false,                        
            }
        )
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body         = document.body;
        const html         = document.documentElement;
        const docHeight    = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {    
            this.props.LoadScrollData(this.state.page+1);           
        }               
    } 

    handleClick (id,title){
        console.log(this.props);
        let {history} = this.props;
        let plug = Replacingstring(title)
        history.push('/'+id+'-'+plug+'');        
    }

    render() {                                                    
        return (
            <section className="content">                      
                <div className="row margin">                     
                    <div className="clearfix"></div>                                 
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
                                        {/* <LazyLoad offsetVertical={150}>  */}
                                            <img src={URI+item.backdrop_path} className="image-list" width="auto" height="300" />
                                        {/* </LazyLoad> */}
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

const mapStateToProps = (state)=>{
    return {
        LoadPage:state
    }
}
const mapDispatchToProps = {
    LoadScrollData
}
export default connect(mapStateToProps,mapDispatchToProps)(Body); 

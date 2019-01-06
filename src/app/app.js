import React from 'react'; 
import Header from './component/Header';
import Body from './component/Body';
import Detail from './component/Detail';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
class HelloWorld extends React.Component {
  render() {
    return (
      <Router history={history}>        
        <div className="wrapper">        
          <img className="bg" src={'http://localhost:8080/public/icons/bg.png'} />
          <Header history={history}/>     
            <Switch>                
              <Route exact path="/" component={()=><Body history={history}/>} />  
              <Route path="/:page" component={Detail}/>                        
            </Switch>
        </div>
      </Router>
    )
  }
}

export default HelloWorld; 
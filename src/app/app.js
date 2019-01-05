import React from 'react'; 

import Header from './component/Header';
import Body from './component/Body';
class HelloWorld extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Body/>
      </div>
    )
  }
}

export default HelloWorld; 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import PCIndex from './coponents/Pc_index';
import PCNewsDetails from './coponents/pc_detail';
import MobileNewsDetails from './coponents/mobile_detail';
import MobileIndex from './coponents/mobile_index';
import MediaQuery from 'react-responsive';
class Root extends Component{
    render(){
        return (
           <div>
               <MediaQuery query='(min-device-width:1224px)'>
                   <Router history={hashHistory}>
                       <Route path="/" component={PCIndex}></Route>
                       <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                   </Router>
               </MediaQuery>
               <MediaQuery query='(max-device-width:1224px)'>
                   <Router history={hashHistory}>
                       <Route path="/" component={MobileIndex}></Route>
                       <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
                   </Router>
               </MediaQuery>
           </div>
        );
    };
}
export default Root;

ReactDOM.render(<Root/>, document.getElementById('container'));
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import PCIndex from './coponents/Pc_index';
import MobileIndex from './coponents/mobile_index';
import MediaQuery from 'react-responsive';
class Root extends Component{
    render(){
        return (
           <div>
               <MediaQuery query='(min-device-width:1224px)'>
                   <PCIndex/>
               </MediaQuery>
               <MediaQuery query='(max-device-width:1224px)'>
                   <MobileIndex/>
               </MediaQuery>
           </div>
        );
    };
}
export default Root;

ReactDOM.render(<Root/>, document.getElementById('container'));
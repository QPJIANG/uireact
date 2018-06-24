import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import moment from 'moment';
import "moment/locale/zh-cn"  //简体中文
import "moment/locale/en-gb"  // 英文 uk   // 默认使用后加载项
import registerServiceWorker from './registerServiceWorker';

import App from './App';
// import LikeButton from './LikeButton'

//"en"
console.log(moment.locale());
console.log(moment("20111031", "YYYYMMDD").fromNow());

//"zh-cn"  
moment.locale('zh-cn');//"zh-cn"

console.log(moment.locale());
console.log(moment("20111031", "YYYYMMDD").fromNow());



/**
 * render  React.Component 
 * svg img 
 * style
 */

// var myStyle = {
//     fontSize: 10,
//     color: '#FF0000'
// };

// ReactDOM.render(
//     <div>
//         <img src={logo} className="App-logo" alt="logo" />
//          <h1 style = {myStyle}>start</h1>
//         <LikeButton/>
//     </div>   ,
//     document.getElementById('root')
// );


/**
 * route
 */
ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
);
// registerServiceWorker();

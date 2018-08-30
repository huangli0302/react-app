import React, { Component } from 'react';
import API from './../../http/api.js';
import './home.less';

export default class Home extends Component {
  login= async ()=>{
    alert(1);
    let result = await API.login({"userName": "huangli"});

  }
  render() {
    
    return (
     <div>
      <button onClick={this.login.bind(this)} className="tt">
          <a>Home页面125g</a>
      </button>
      
     </div>
    );
  }
}
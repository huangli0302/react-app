import React, { Component } from 'react';
import './login.less';
import API from './../../http/api.js';
import { List, InputItem, WhiteSpace,NavBar,Icon,Button} from 'antd-mobile';
export default class Login extends Component {
    login= async ()=>{
        alert(1);
        let result = await API.getSource({"userName": "huangli"});
        console.log(result);
    
      }
  render() {
    
    return (
     <div >
        <NavBar
            mode="dark"
            leftContent=""
            >登录
        </NavBar>
        <div>
           <List>
             <InputItem placeholder="请输入用户名">
                账号
             </InputItem>
               
             <InputItem placeholder="请输入密码">
               密码
             </InputItem> 
           </List>
        </div>
        <div style={{padding:'0 20px'}}>
        <WhiteSpace>
        </WhiteSpace>
        <Button type="primary" disabled>
           登录
        </Button>
           
        </div>

     </div>
    );
  }
}
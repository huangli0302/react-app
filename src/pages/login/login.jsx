import React, { Component } from 'react';
import './login.less';
import API from './../../http/api.js';
import { List, InputItem, WhiteSpace, NavBar, Icon, Button, Picker } from 'antd-mobile';
import md5 from 'js-md5';
import base64 from 'js-base64';
import { version } from 'core-js';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceArray: [],
      pickList: [],
      userValue: '',
      sourceValue: '',
      passwordValue: '',
      pickerValue: ''
    };
    
  }
  getSource = async (value) => {
    if (value) {
      this.setState({ "userValue": value });
      let result = await API.getSource({ "userName": value });
      console.log(result);
      var tempList = [];
      result.forEach(element => {
        let map = {};
        map["label"] = element.sourceName;
        map["value"] = element.sourceId;
        tempList.push(map);
      });
      console.log(tempList);
      this.setState({ "sourceArray": result });
      this.setState({ "pickList": tempList });
    }


  }
  onChange = (v) => {
    this.setState({ "sourceValue": v });
  }
  onSubmit = async (user, password, source) => {
    if (source) {
      alert('有数据源');
    } else {
      alert('无数据源');
      let userMd5 = md5('$EF$'+user);
      let userBase64 = base64.Base64.encode(user);
      let passwordMd5 = md5('$EF$'+password);
      let passwordBase64 = base64.Base64.encode(password);
      let userLock=`${userMd5}$EF$${userBase64}`;
      let passwordLock = `${passwordMd5}$EF$${passwordBase64}`;
      console.log(userMd5,userBase64);

      let reslut = await API.login({"username":userLock,"password":passwordLock});
      if(reslut.success){
        this.props.history.push("/home") 
      }
    }
  }
  getPassword = (v)=>{
    this.setState({ "passwordValue": v });
  }
  render() {
    var NewButton;
    if (this.state.sourceArray.length) {
      if (this.state.sourceValue && this.state.userValue && this.state.passwordValue) {
        NewButton = <Button type="primary" onClick={()=>this.onSubmit(this.state.userValue, this.state.passwordValue, this.state.sourceValue)}> 登录</Button>
      } else {
        NewButton = <Button type="primary" disabled> 登录</Button>
      }
    } else {
      if (this.state.userValue && this.state.passwordValue) {
        NewButton = <Button type="primary" onClick={()=>this.onSubmit(this.state.userValue, this.state.passwordValue, null)}> 登录</Button>
      } else {
        NewButton = <Button type="primary" disabled> 登录</Button>
      }
    }
    return (
      <div >
        <NavBar
          mode="dark"
          leftContent=""
        >登录
        </NavBar>
        <div>
          <List>
            <InputItem placeholder="请输入用户名" onBlur={this.getSource} clear>
              账号
             </InputItem>
            {this.state.sourceArray.length > 0 &&
              <Picker data={this.state.pickList} cols={1} className="forss"
                value={this.state.sourceValue}
                onChange={this.onChange}>
                <List.Item arrow="horizontal">数据源</List.Item>
              </Picker>}
            <InputItem placeholder="请输入密码" clear type="password" onBlur={this.getPassword}>
              密码
             </InputItem>
          </List>
        </div>
        <div style={{ padding: '0 20px' }}>
          <WhiteSpace>
          </WhiteSpace>
          {NewButton}

        </div>

      </div>
    );
  }
}
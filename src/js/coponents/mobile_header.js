import React,{Component} from 'react';
import {Row,Col} from 'antd';
import logo from '../../img/headerLogo.png';
import { Menu, Icon,Tabs,message,Form,Input,Button,Checkbox,Modal } from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
const FormItem=Form.Item;
const TabPane=Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends Component{
    constructor(){
        super();
        this.state={
            current:'top',
            modalVisible:false,
            action:'login',
            hasLogined:false,
            userNickName:'',
            userId:''
        }
    }
    handleClick(e){
        if (e.key="register"){
            this.setState({current:'register'});
            this.setModalVisible(true);
        }else {
            this.setState({current:e.key});
        }
    };
    setModalVisible(value){
        this.setState({modalVisible:value});
    };
    handleSubmit(e){
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username="+formData.userName+"&password="+formData.password
            +"&r_userName=" + formData.r_userName + "&r_password="
            + formData.r_password + "&r_confirmPassword="
            + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({userNickName: json.NickUserName, userid: json.UserId});
            });
        if (this.state.action=="login") {
            this.setState({hasLogined:true});
        }
        message.success("请求成功！");
        this.setModalVisible(false);
    };
    login(){
        this.setModalVisible(true);
    };
    callback(key){
        if(key==1){
            this.setState({action:'login'});
        } else if(key==2){
            this.setState({action:'register'});
        }

    };
    render(){
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined ?
            <Link to="">
                <Icon type="inbox"/>
            </Link>
            :
            <Icon type="setting" onClick={this.login.bind(this)}/>;
        return(
            <div id="mobileheader">
                <header>
                    <img src={logo} alt="logo={}"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>


                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                       onCancel={()=>this.setModalVisible(false)}
                       onOk={()=>this.setModalVisible(false)}
                       okText="关闭"
                >
                    <Tabs type="card" onChange={this.callback.bind(this)}>
                        <TabPane tab="登陆" key="1">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('userName')(<Input placeholder="请输入你的账号"/>)}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('password')(<Input type="password" placeholder="请输入你的密码"/>)}
                                </FormItem>
                                <Button type="primary" htmlType="submit">登陆</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('r_userName')(<Input placeholder="请输入你的账号"/>)}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password',)(<Input type="password" placeholder="请输入你的密码"/>)}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="请再次输入你的密码"/>)}
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}
export default MobileHeader=Form.create({})(MobileHeader);
import React,{Component} from 'react';
import {Row,Col} from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCFooter extends Component{
    constructor(){
        super()
        this.state={
            current:'top'
        }
    }
    handleClick(e){
        this.setState({
            current:e.key,
        })
    };
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                       &copy;&nbsp;2016 ReactNews. All right Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}

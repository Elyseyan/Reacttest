import React, {Component} from 'react';
import {Card} from 'antd';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

export default class PCNewsImageBlock extends Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    };

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=6", myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    };
    render() {
        const styleImage = {
            display:"block",
            width:this.props.imageWidth,
            height:"90px"
        };
        const styleH3 = {
            width:this.props.imageWidth,
            whiteSpace:"nowrap",
            overflow:"hidden",
            textOverflow:"ellipsis"
        };
        const {news}=this.state;
        const newList=news.length?news.map((newsItem,index)=>(
            <div key={index} className="imageblock">
                <div className="custom-image">
                    <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
                </div>
                <div className="custom-card">
                    <h3 style={styleH3}>{newsItem.title}</h3>
                    <p>{newsItem.author_name}</p>
                </div>
            </div>
        )) : "没有加载任何新闻";
        return (
            <div className="topNewsList">
                <Card title={this.props.cartTitle} bordered={true} style={{width: this.props.width}}>
                    {newList}
                </Card>
            </div>
        )
    }
}

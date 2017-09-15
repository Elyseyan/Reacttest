import React ,{Component} from 'react';
import {Card} from 'antd';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

export default class PCNewsBlock extends Component{
    constructor(){
        super();
        this.state={
            news:''
        };
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    };

    render(){
        const {news}=this.state;
        const newList=news.length?news.map((newsItem,index)=>(
            <li key={index}>
                {/*<Link to={`details/${newsItem.uniqueKey}`} target="_blank">*/}
                    {newsItem.title};
                 {/*</Link>*/}
            </li>
        )):"没有加载任何新闻";
        return(
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newList}
                    </ul>
                </Card>
            </div>
        )
    }
}
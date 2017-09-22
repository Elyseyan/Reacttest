import React ,{Component}from 'react';
import  {Row,Col,BackTop} from 'antd';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile-footer'
export default class PCNewDetails extends Component{
    constructor(){
        super();
        this.state={
            newsItem:''
        };
    };

    componentDidMount() {
        var myFetchOptions={
            method:'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台"})
    }
    createMarkup(){
        return {__html:this.state.newsItem.pagecontent}
    }
    render(){
        return(
            <div>
                <MobileHeader></MobileHeader>
                <Row>
                    <Col span={24} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                </Row>
                <MobileFooter></MobileFooter>
                <BackTop/>
            </div>
        )
    }
}

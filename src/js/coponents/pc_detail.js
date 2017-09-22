import React ,{Component}from 'react';
import  {Row,Col,BackTop} from 'antd';
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewImageBlock from './pc_news_image_block';
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
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}>

                    </Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={6}>
                        <PCNewImageBlock count={8} type="yule" width="100%" cartTitle="娱乐推送" imageWidth="132px"/>
                        <PCNewImageBlock count={8} type="top" width="100%" cartTitle="相关信息" imageWidth="132px"/>
                    </Col>
                    <Col span={2}>

                    </Col>
                </Row>
                <PCFooter></PCFooter>
                <BackTop/>
            </div>
        )
    }
}

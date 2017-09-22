
import React ,{Component} from 'react';
import {Row,Col} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router';

export default class MoblieList extends Component{
    constructor(){
        super();
        this.state={
            news:'',
            count:20
        };
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        window.removeEventListener("scroll",this.scrollHandler.bind(this));
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.state.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    };

    componentDidMount() {
        window.addEventListener("scroll",this.scrollHandler.bind(this));
    }
    scrollHandler(e){
        console.log(e);
    }
    render(){
        const {news}=this.state;
        const newList=news.length?news.map((newsItem,index)=>(
            <section key={index} className="m_article list-item special_section clearfix">
                <Link to={`details/${newsItem.uniquekey}`} target='_blank'>
                    <div className="m_article_img">
                        <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                    </div>
                    <div className="m_article_info">
                        <div className="m_article_title">
                            <span>{newsItem.title}</span>
                        </div>
                        <div className="m_article_desc clearfix">
                            <div className="m_article_desc_l">
                                <span className="m_article_channel">{newsItem.realtype}</span>
                                <span className="m_article_time">{newsItem.data}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        )):"没有加载任何新闻";
        return(
            <div>
              <Row>
                  <Col span={24}>
                      {newList}
                  </Col>
              </Row>
            </div>
        )
    }
}
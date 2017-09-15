import React ,{Component} from 'react';
import {Row,Col} from 'antd';
import carousel_1 from '../../img/carousel_1.jpg';
import carousel_2 from '../../img/carousel_2.jpg';
import carousel_3 from '../../img/carousel_3.jpg';
import carousel_4 from '../../img/carousel_4.jpg';
import {Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_new_block';
import PCNewImageBlock from './pc_news_image_block';
const TabPane=Tabs.TabPane;

export default  class PCNewsContainer extends React.Component{
    render(){
        const settings={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };

        return(

            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src={carousel_1}/></div>
                                    <div><img src={carousel_2}/></div>
                                    <div><img src={carousel_3}/></div>
                                    <div><img src={carousel_4}/></div>
                                </Carousel>
                            </div>
                            <PCNewImageBlock count={6} type="top" width="400px" cartTitle="国际头条" imageWidth="112px"></PCNewImageBlock>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewImageBlock count={7} type="guoji" width="100%" cartTitle="国际头条" imageWidth="132px"></PCNewImageBlock>
                            <PCNewImageBlock count={14} type="yule" width="100%" cartTitle="娱乐头条" imageWidth="132px"></PCNewImageBlock>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}


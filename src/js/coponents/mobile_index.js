import React,{Component} from 'react';
import MobileHeader from './mobile_header'
import MobileFooter from './mobile-footer'
import {Tabs} from 'antd';
import MobileList from './mobile-list';
const TabPane=Tabs.TabPane;
import carousel_1 from '../../img/carousel_1.jpg';
import carousel_2 from '../../img/carousel_2.jpg';
import carousel_3 from '../../img/carousel_3.jpg';
import carousel_4 from '../../img/carousel_4.jpg';
import {Carousel} from 'antd';
export default class MobileIndex extends Component{
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
                <MobileHeader></MobileHeader>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <div className="carousel">
                            <Carousel {...settings}>
                                <div><img src={carousel_1}/></div>
                                <div><img src={carousel_2}/></div>
                                <div><img src={carousel_3}/></div>
                                <div><img src={carousel_4}/></div>
                            </Carousel>
                        </div>
                        <MobileList type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList type="shehui"/>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList type="guonei"/>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList type="guoji"/>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList type="yule"/>
                    </TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        );
    };
}
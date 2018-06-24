
import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Switch,Icon,Row,Col } from 'antd';
import 'antd/dist/antd.css'

import { DatePicker } from 'antd';
// bizcharts
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
  
// ajax 
import reqwest from 'reqwest';


const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

// 数据源
const data = [
    { genre: 'Sports', sold: 275, income: 2300 },
    { genre: 'Strategy', sold: 115, income: 667 },
    { genre: 'Action', sold: 120, income: 982 },
    { genre: 'Shooter', sold: 350, income: 5271 },
    { genre: 'Other', sold: 150, income: 3710 }
  ];
  
  // 定义度量
  const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' }
  };


class AntDemo extends React.Component{
    render() {
       return ( 
       <div>
            antd demo
            <hr/>
            <div id="chart">
                <Chart width={600} height={400} data={data} scale={cols}>
                    <Axis name="genre" />
                    <Axis name="sold" />
                    <Legend position="bottom" dy={-20} />
                    <Tooltip />
                    <Geom type="interval" position="genre*sold" color="genre" />
                </Chart>
            </div>
            <Button type="primary">Button</Button>
            <Switch defaultChecked  />
            <Icon type="link" />
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
            </Row>
         
           
            <DatePicker />
       </div>)
    }
}
export default AntDemo;
import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Switch, Icon, Row, Col, Table, Radio, Form, Divider} from 'antd';
import 'antd/dist/antd.css'

import {DatePicker} from 'antd';
// bizcharts
import {Chart, Geom, Axis, Tooltip, Legend, Coord} from 'bizcharts';

// ajax 
import reqwest from 'reqwest';
import moment from 'moment';
import "moment/locale/zh-cn"
const FormItem = Form.Item;

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;


moment.locale('zh-cn');//"zh-cn"

class DateRange extends React.Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
    };

    disabledStartDate = (startValue) => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    }

    disabledEndDate = (endValue) => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    }

    onStartChange = (value) => {
        this.onChange('startValue', value);
    }

    onEndChange = (value) => {
        this.onChange('endValue', value);
    }

    handleStartOpenChange = (open) => {
        if (!open) {
            this.setState({endOpen: true});
        }
    }

    handleEndOpenChange = (open) => {
        this.setState({endOpen: open});
    }

    render() {
        const {startValue, endValue, endOpen} = this.state;
        return (
            <div>
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={startValue}
                    placeholder="Start"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                />
                <DatePicker
                    disabledDate={this.disabledEndDate}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={endValue}
                    placeholder="End"
                    onChange={this.onEndChange}
                    open={endOpen}
                    onOpenChange={this.handleEndOpenChange}
                />
            </div>
        );
    }
}

// 数据源
const data = [
    {genre: 'Sports', sold: 275, income: 2300},
    {genre: 'Strategy', sold: 115, income: 667},
    {genre: 'Action', sold: 120, income: 982},
    {genre: 'Shooter', sold: 350, income: 5271},
    {genre: 'Other', sold: 150, income: 3710},
    {genre: 'Other1', sold: 0, income: 3710},
    {genre: 'Other2', sold: 1, income: 3710},
    {genre: 'Other3', sold: 1, income: 3710},
    {genre: 'Other4', sold: 1, income: 3710},
    {genre: 'Other5', sold: 1, income: 3710},
    {genre: 'Other6', sold: 1, income: 3710},
    {genre: 'Other7', sold: 1, income: 3710},
    {genre: 'Other8', sold: 1, income: 3710},
    {genre: 'Other9', sold: 1, income: 3710},
    {genre: 'Other10', sold: 1, income: 3710},
    {genre: 'Other11', sold: 1, income: 3710},
    {genre: 'Other12', sold: 1, income: 3710},
    {genre: 'Other13', sold: 1, income: 3710},
    {genre: 'Other14', sold: 1, income: 3710},
    {genre: 'Other15', sold: 1, income: 3710},
    {genre: 'Other16', sold: 1, income: 3710},
    {genre: 'Other17', sold: 1, income: 3710},
];

// 定义度量
const cols = {
    sold: {alias: '销售量'},
    genre: {alias: '游戏种类'}
};


const dataSource1 = [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
}, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
}];

const columns1 = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filters: [{
        text: 'Joe',
        value: 'Joe',
    }, {
        text: 'Jim',
        value: 'Jim',
    }, {
        text: 'Submenu',
        value: 'Submenu',
        children: [{
            text: 'Green',
            value: 'Green',
        }, {
            text: 'Black',
            value: 'Black',
        }],
    }],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}];

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70,
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    width: 360,
    render: (text, record) => (
        <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical"/>
      <a href="javascript:;">Delete</a>
      <Divider type="vertical"/>
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down"/>
      </a>
    </span>
    ),
}];

const data2 = [];
for (let i = 1; i <= 10; i++) {
    data2.push({
        key: i,
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = {y: 240};
const pagination = {position: 'bottom'};

class TableDemo extends React.Component {
    state = {
        bordered: false,
        loading: false,
        pagination,
        size: 'default',
        expandedRowRender,
        title: undefined,
        showHeader,
        footer,
        rowSelection: {},
        scroll: undefined,
    }

    handleToggle = (prop) => {
        return (enable) => {
            this.setState({[prop]: enable});
        };
    }

    handleSizeChange = (e) => {
        this.setState({size: e.target.value});
    }

    handleExpandChange = (enable) => {
        this.setState({expandedRowRender: enable ? expandedRowRender : undefined});
    }

    handleTitleChange = (enable) => {
        this.setState({title: enable ? title : undefined});
    }

    handleHeaderChange = (enable) => {
        this.setState({showHeader: enable ? showHeader : false});
    }

    handleFooterChange = (enable) => {
        this.setState({footer: enable ? footer : undefined});
    }

    handleRowSelectionChange = (enable) => {
        this.setState({rowSelection: enable ? {} : undefined});
    }

    handleScollChange = (enable) => {
        this.setState({scroll: enable ? scroll : undefined});
    }

    handlePaginationChange = (e) => {
        const {value} = e.target;
        this.setState({
            pagination: value === 'none' ? false : {position: value},
        });
    }

    render() {
        const state = this.state;
        return (
            <div>
                <div className="components-table-demo-control-bar">
                    <Form layout="inline">
                        <FormItem label="Bordered">
                            <Switch checked={state.bordered} onChange={this.handleToggle('bordered')}/>
                        </FormItem>
                        <FormItem label="loading">
                            <Switch checked={state.loading} onChange={this.handleToggle('loading')}/>
                        </FormItem>
                        <FormItem label="Title">
                            <Switch checked={!!state.title} onChange={this.handleTitleChange}/>
                        </FormItem>
                        <FormItem label="Column Header">
                            <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange}/>
                        </FormItem>
                        <FormItem label="Footer">
                            <Switch checked={!!state.footer} onChange={this.handleFooterChange}/>
                        </FormItem>
                        <FormItem label="Expandable">
                            <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange}/>
                        </FormItem>
                        <FormItem label="Checkbox">
                            <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange}/>
                        </FormItem>
                        <FormItem label="Fixed Header">
                            <Switch checked={!!state.scroll} onChange={this.handleScollChange}/>
                        </FormItem>
                        <FormItem label="Size">
                            <Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="middle">Middle</Radio.Button>
                                <Radio.Button value="small">Small</Radio.Button>
                            </Radio.Group>
                        </FormItem>
                        <FormItem label="Pagination">
                            <Radio.Group
                                value={state.pagination ? state.pagination.position : 'none'}
                                onChange={this.handlePaginationChange}
                            >
                                <Radio.Button value="top">Top</Radio.Button>
                                <Radio.Button value="bottom">Bottom</Radio.Button>
                                <Radio.Button value="both">Both</Radio.Button>
                                <Radio.Button value="none">None</Radio.Button>
                            </Radio.Group>
                        </FormItem>
                    </Form>
                </div>
                <Table {...this.state} columns={columns} dataSource={data2}/>
            </div>
        );
    }
}


class AntDemo extends React.Component {
    render() {
        return (
            <div>
                antd demo
                <hr/>
                <div id="chart">
                    {/*
                     <Chart width={600} height={400} data={data} scale={cols} >

                     forceFit: 图表跟随图表容器宽度变化 此时，不需要设置 width 属性，即使设置了也不会生效。
                     chart.forceFit(); // 手动调用自适应函数
                     仅当浏览器的窗口变化时，图表会重新计算宽度，其他情况下不进行宽度的计算和自适应。
                     */}
                    <Chart height={600} data={data} scale={cols} forceFit="true"  animate="true">
                        <Axis name="genre"/>
                        <Axis name="sold"/>
                        <Legend position="bottom"/>
                        <Tooltip />

                        <Geom type="interval" position="genre*sold" color="genre"/>
                    </Chart>
                </div>
                 <Button type="primary">Button</Button>
                 <Switch defaultChecked/>
                 <Icon type="link"/>

                {/*
                 <Row gutter={16}>  gutter 导致出现横行滚动条。
                */}
                <Row>
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


                <Row>
                    <Col className="gutter-row" span={24}>
                        <DatePicker placeholder="选择时间" showToday="true"/>
                    </Col>
                    <Col className="gutter-row" span={24}>
                         <DateRange />
                    </Col>
                    <Col className="gutter-row" span={24}>
                         <Table dataSource={dataSource1} columns={columns1} size="small"/>
                    </Col>
                    <Col className="gutter-row" span={24}>
                        {/*
                            注释
                         */}
                        <TableDemo />
                    </Col>
                </Row>

            </div>)
    }
}
export default AntDemo;
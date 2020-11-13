import React, { Component } from "react";
import { connect } from "dva";
import { Table as ProTable } from "antd";
// import {queryRule} from "../../../ant-app/src/pages/ListTableList/service"
// import {queryRule} from "../../../ant-app/src/pages/ListTableList/service"
// import ProTable from '@ant-design/pro-table';

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "住址",
    dataIndex: "city",
    key: "city"
  }
];

// @connect(({ example }) => ({ example }), {
@connect(
  state => {
    console.log("state", state); //sy-log
    return { example: state.example };
  },
  {
    getProductData: payload => ({ type: "example/getProductData", payload })
  }
)
class ExamplePage extends Component {
  dataSearch = () => {
    // 异步获取数据
    console.log('dataSearch')
    this.props.getProductData();
  };
  render() {
    console.log(" ExamplePage porps", this.props); //sy-log
    const { data } = this.props.example;
    return (
      <div>
        <h3>暗号：双十一打骨折</h3>
        <button onClick={this.dataSearch}>search</button>
        <ProTable
          columns={columns}
          request={(params, sorter, filter) => this.dataSearch({ ...params, sorter, filter })}
          rowKey="id" />
      </div>
    );
  }
}
export default ExamplePage;

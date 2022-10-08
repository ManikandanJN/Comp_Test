import React, { useState } from "react";
import moment from 'moment';
import type { RadioChangeEvent } from "antd";
import { Input, Modal, Button, Radio, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import DateComp from "./DateComp";

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const Filter = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState("Today");
  const [buttonVal, setButtonVal] = useState("Today");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setValue(buttonVal);
    setIsModalVisible(false);
  };

  //Radio
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleOk = () => {
    alert(value);
    console.log("radio checked", value);
    setButtonVal(value);
    setIsModalVisible(false);
  };

  const dateOnChange = (date: any, dateString:any) => {
    console.log(dateString[0]+" to "+dateString[1]);
    //console.log(moment(date).format('YYYY-MM-DD'));
  };

  return (
    <div className="filter">
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <div className="btn-dropdown">
        Date
        <Button type="link" block className="dropdown" onClick={showModal}>
          {buttonVal} <DownOutlined />
        </Button>
        <Modal
          style={{ top: 30, left: 400 }}
          width={250}
          title="Filter by Date"
          visible={isModalVisible}
          footer={false}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical" className="radio-gap">
              <Radio value={"Today"}>Today</Radio>
              <Radio value={"Last 7 days"}>Last 7 days</Radio>
              <Radio value={"Last 30 days"}>Last 30 days</Radio>
              <Radio value={"Custom"}>Custom</Radio>
              {value === "Custom" && <DateComp dateOnChange={dateOnChange} />}
            </Space>
          </Radio.Group>
          <div className="main-btn">
            <Button className="first-btn" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="second-btn" onClick={handleOk}>
              Apply
            </Button>
          </div>
        </Modal>
        Location
        <Button type="link" block className="dropdown">
          Link <DownOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Filter;

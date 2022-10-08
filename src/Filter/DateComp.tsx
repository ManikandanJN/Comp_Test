import React from "react";
import { DatePicker } from "antd";

const DateComp = (props:any) => {
  const { RangePicker } = DatePicker;

  // const onChange = (date: any , dateString : any) => {
  //   console.log(date, dateString);
  // };

  return (
    <div className="date-row">
      <RangePicker onChange={props.dateOnChange} />
    </div>
  );
};

export default DateComp;

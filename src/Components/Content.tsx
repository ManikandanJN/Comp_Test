import React from "react";
import { AreaChartOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

type contentDetailsProps = {
  id: any;
  title: any;
  subtitle: any;
  description: string;
};

const Content = (props: contentDetailsProps) => {
  return (
    <Col className="gutter-row" span={4}>
      <div className="cols">
        <AreaChartOutlined className="iconstyle" />
        <div className="col_content">
          <h1>
            {props.title}
            <sub>{props.subtitle}</sub>
          </h1>
        </div>
        <p>{props.description}</p>
      </div>
    </Col>
  );
};

export default Content;

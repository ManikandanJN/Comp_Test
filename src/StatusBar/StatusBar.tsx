import React from 'react'
import { Steps } from 'antd';
import { MinusCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import TitleText from './TitleText';
//import {getCurrentDate} from '../'

const { Step } = Steps;
// let newDate = new Date()
// let date = newDate.getUTCDate();

const StatusBar = () => {
  return (
    <div className="container">
      <Steps direction="vertical" current={0}>
          <Step title={<TitleText title="Ordered" description="N/A" />} className='linebar' icon={<CheckCircleOutlined />} />
          <Step title={<TitleText title="Dispatcheed" description="N/A" />} icon={<MinusCircleOutlined />} />
          <Step title={<TitleText title="Picking Up" description="N/A" />} className='linebar1' icon={<MinusCircleOutlined />} />
          <Step title={<TitleText title="Transit" description="N/A" />} className='linebar1' icon={<MinusCircleOutlined />} />
          <Step title={<TitleText title="Delivered" description="N/A" />} className='linebar1' icon={<MinusCircleOutlined />} />
      </Steps>
    </div>
  )
}

export default StatusBar
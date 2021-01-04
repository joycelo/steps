import React from 'react';
import './main.css';
import { Timeline } from 'antd';



class Main extends React.Component {


  render() {
    
    return (
      <div>
          <Timeline>
            <Timeline.Item color="green">Ab</Timeline.Item>
            <Timeline.Item color="red">Cnt</Timeline.Item>
            <Timeline.Item color="blue">Lnx</Timeline.Item>
            <Timeline.Item color="gray">Mc</Timeline.Item>
          </Timeline>
          <img src='https://gameznet.com.au/animals/themes/fox/animated/giphy-1.gif'/>
      </div>
    )
  }

}

export default Main;
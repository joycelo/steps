import React from 'react';
import './main.css';
import { Timeline, Popover } from 'antd';



class Main extends React.Component {


  render() {

    const popoverContent = (
      <div>
        <p>po ta to</p>
      </div>
    );
    
    return (
      <div>
          <Timeline>
            <Timeline.Item color="green">Ab</Timeline.Item>
            <Timeline.Item color="red">Cnt</Timeline.Item>
            <Timeline.Item color="blue">Lnx</Timeline.Item>
            <Timeline.Item color="gray">Mc</Timeline.Item>
          </Timeline>
          <Popover content={popoverContent} title="tdy">
            <img src='https://gameznet.com.au/animals/themes/fox/animated/giphy-1.gif'/>
          </Popover>
      </div>
    )
  }

}

export default Main;
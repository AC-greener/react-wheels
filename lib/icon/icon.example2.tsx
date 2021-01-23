import React from 'react';
import Icon from './icon';

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <h3>设置不同的size</h3>
      <Icon fontSize="small" name="wechat"/>
      <Icon name="wechat"/>
      <Icon fontSize="large" name="wechat"/>
      <Icon style={{ fontSize: '41px', color: 'red' }} name="wechat"/>
    </div>
  );
};

export default IconExample;
import React from 'react';
import Icon from './icon';

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <h3>设置不同的size</h3>
      <Icon fontSize="small" name="iconwechat"/>
      <Icon name="iconwechat"/>
      <Icon fontSize="large" name="iconwechat"/>
      <Icon style={{ fontSize: '41px', color: 'red' }} name="iconwechat"/>
      <Icon style={{ fontSize: '41px', color: 'green' }} name="iconali"/>
      <Icon style={{ fontSize: '41px', color: 'blue' }} name="iconali"/>
      <Icon style={{ fontSize: '41px', color: 'grey' }} name="iconali"/>
    </div>
  );
};

export default IconExample;
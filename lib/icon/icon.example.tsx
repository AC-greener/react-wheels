import React from 'react';
import Icon from './icon';

const IconExample: React.FunctionComponent = () => {
  return (
    <div >
      <h3>设置不同的color</h3>
      <Icon name="wechat"/>
      <Icon color="primary" name="wechat"/>
      <Icon color="secondary" name="wechat"/>
      <Icon color="action" name="wechat"/>
      <Icon color="disabled" name="wechat"/>
      <Icon style={{ color: 'green' }} name="wechat"/>
    </div>
  );
};

export default IconExample;
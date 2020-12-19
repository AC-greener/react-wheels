import React from 'react';
import Icon from './icon';

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <Icon name="wechat"/>
      <Icon color="primary" name="wechat"/>
      <Icon color="secondary" name="wechat"/>
      <Icon color="action" name="wechat"/>
      <Icon color="disabled" name="wechat"/>
      <Icon style={{ color: 'green' }} name="wechat"/>
      <h3>size</h3>
      <Icon fontSize="small" name="wechat"/>
      <Icon name="wechat"/>
      <Icon fontSize="large" name="wechat"/>
      <Icon style={{ fontSize: 40 }} name="wechat"/>
    </div>
  );
};

export default IconExample;
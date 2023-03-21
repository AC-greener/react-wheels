import React from 'react';
import Icon from './icon';

const IconExample: React.FC = () => {
  return (
    <div >
      <h3>设置不同的color</h3>
      <Icon name="iconwechat"/>
      <Icon color="primary" name="iconwechat"/>
      <Icon color="secondary" name="iconwechat"/>
      <Icon color="action" name="iconwechat"/>
      <Icon color="disabled" name="iconwechat"/>
      <Icon style={{ color: 'green' }} name="iconwechat"/>
      <Icon color="primary" name="iconali"/>
      <Icon color="secondary" name="iconali"/>
      <Icon color="action" name="iconali"/>
    </div>
  );
};

export default IconExample;
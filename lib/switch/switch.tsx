import React from 'react';
import './switch.scss';

interface SwitchProps extends  Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>  {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (
    checked: boolean,
    event: React.MouseEvent<HTMLDivElement>,
  ) => void;
  theme?: 'default' | 'dark';
  size?: 'small' | 'medium' | 'large';
  labelPosition?: 'left' | 'right';
}

const Switch: React.FC<SwitchProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  theme = 'default',
  size = 'medium',
  labelPosition = 'right',
  className,
  ...restProps
}) => {
  const handleClick= (e) => {
    if (!disabled) {
      const newChecked = !checked;
      if (onChange) {
        onChange(newChecked, e);
      }
       // Add the following line to move label to the right
    document.querySelector(".switch-label")?.classList.toggle("move-right", newChecked);
    }
  };

  return (
    <div onClick={handleClick} className={`switch ${theme} ${size} ${className}`} {...restProps}>
      {labelPosition === 'left' && <label className="switch-label">{label}</label>}
      <button
        type="button"
        className="switch-input"
        aria-checked={checked}
        disabled={disabled}
      />
      {labelPosition === 'right' && <label className="switch-label">{label}</label>}
    </div>
  );
};

export default Switch;

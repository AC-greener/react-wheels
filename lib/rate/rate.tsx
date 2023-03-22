import React, { useState } from "react";

interface RateProps {
  count?: number; // 星星的数量
  value?: number; // 星星的值
  readOnly?: boolean; // 是否只读
  color?: string; // 星星的颜色
  size?: number; // 星星的大小
  onChange?: (value: number) => void; // 星星的改变事件
}

const Rate: React.FC<RateProps> = ({
  count = 5,
  value = 0,
  readOnly = false,
  color = "gold",
  size = 24,
  onChange,
}) => {
  const [hoverValue, setHoverValue] = useState(0); // 鼠标悬停的星星值

  const handleClick = (index: number) => { // 点击星星的事件
    if (!readOnly && onChange) {
      onChange(index);
    }
  };

  const handleMouseEnter = (index: number) => { // 鼠标进入星星的事件
    if (!readOnly) {
      setHoverValue(index);
    }
  };

  const handleMouseLeave = () => { // 鼠标离开星星的事件
    if (!readOnly) {
      setHoverValue(0);
    }
  };

  const renderStars = () => { // 渲染星星
    const stars: JSX.Element[] = [];
    for (let i = 1; i <= count; i++) {
      const isFilled = i <= (hoverValue || value); // 是否填充
      const isHalf = i - 0.5 === (hoverValue || value); // 是否半颗星
      stars.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: readOnly ? "default" : "pointer",
            color: isFilled ? color : "gray",
            fontSize: size,
            transition: "color 0.3s",
          }}
        >
          {isHalf ? "⭐" : "★"}
        </span>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rate;

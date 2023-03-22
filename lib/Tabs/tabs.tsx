import './tabs.scss'
import React from "react";

interface Tab {
  label: string
  content: React.ReactNode
  key: string
}

interface TabsProps {
  tabs: Tab[]
  activeKey: string
  onChange: (activeKey: string) => void
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeKey, onChange}) => {

  return (
    <div className="zyun-tabs-root">
      <div className="zyun-tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => onChange(tab.key)}
            className={`zyun-tabs-button ${
              activeKey === tab.key ? "zyun-tabs-button--active" : ""
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="zyun-tabs-content">{tabs.find(tab => tab.key === activeKey)?.content}</div>
    </div>
  );
};

export default Tabs;
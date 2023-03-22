import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tabs from '../tabs';
import '@testing-library/jest-dom/extend-expect';

const tabs = [
  {
    label: 'Tab 1',
    content: <div>Content for tab 1</div>,
    key: 'tab1'
  },
  {
    label: 'Tab 2',
    content: <div>Content for tab 2</div>,
    key: 'tab2'
  },
  {
    label: 'Tab 3',
    content: <div>Content for tab 3</div>,
    key: 'tab3'
  }
];

describe('Tabs Component', () => {
  it('renders the tabs and contents correctly', () => {
    const { getByText } = render(<Tabs tabs={tabs} activeKey="tab1" onChange={() => {}} />);
    const tab1Button = getByText('Tab 1');
    const tab2Button = getByText('Tab 2');
    const tab3Button = getByText('Tab 3');

    expect(tab1Button).toHaveClass('zyun-tabs-button--active');
    expect(tab2Button).not.toHaveClass('zyun-tabs-button--active');
    expect(tab3Button).not.toHaveClass('zyun-tabs-button--active');

    const content = getByText('Content for tab 1');
    expect(content).toBeInTheDocument();

    fireEvent.click(tab2Button);

    expect(tab1Button).not.toHaveClass('zyun-tabs-button--active');
    expect(tab2Button).toHaveClass('zyun-tabs-button--active');
    expect(tab3Button).not.toHaveClass('zyun-tabs-button--active');

    const newContent = getByText('Content for tab 2');
    expect(newContent).toBeInTheDocument();
  });
});

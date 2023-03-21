import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconExample from '../lib/icon/icon.demo';
import ButtonExample from '../lib/button/button.demo';
import DialogExample from '../lib/dialog/dialog.demo';
import TreeExample from '../lib/tree/tree.demo'
import LayoutExample from '../lib/layout/layout.example';
import InputExample from '../lib/input/input.example';
import CollapseExample from '../lib/collapse/collapse.example';
import GridExample from '../lib/grid/grid.example';
import ToastExample from '../lib/toast/toast.example';
import UploaderExample from '../lib/uploader/uploader.example';
import PaginationExample from '../lib/pagination/pagination.example';
import { Layout, Header, Aside, Content, Footer } from '../lib/layout/layout'
import './example.scss'

console.log('NavLink :>> ', NavLink);
function App() {
  return (
    <Router>
      <Layout className='site-layout'>
        <Header className='site-header'>
          <div className="logo">
            Fake UI
          </div>
        </Header>
        <Layout>
          <Aside className='site-aside'>
            <h2>组件</h2>
            <ul>
              <li>
                <NavLink activeClassName='active' to="/icon">Icon</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/button">button</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/dialog">Dialog</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/layout">Layout</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/input">Input</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/collapse">Collapse</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/grid">Grid</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/toast">Toast</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/uploader">uploader</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/tree">tree</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/pagination">Pagination</NavLink>
              </li>
            </ul>
          </Aside>
          <Content className='site-content'>
            {/* <Route path="/icon" component={IconExample} /> */}
            <Route path="/button" component={ButtonExample} />
            <Route path="/pagination" component={PaginationExample} />
            {/* <Route path="/dialog" component={DialogExample} />
            <Route path="/layout" component={LayoutExample} />
            <Route path="/input" component={InputExample} />
            <Route path="/collapse" component={CollapseExample} />
            <Route path="/grid" component={GridExample} />
            <Route path="/toast" component={ToastExample} />
            <Route path="/uploader" component={UploaderExample} />
            <Route path="/tree" component={TreeExample} /> */}
          </Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    </Router>
  )
}

export default App
import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import IconExample from '../lib/icon/icon.demo';
import ButtonExample from '../lib/button/button.demo';
import DialogExample from '../lib/dialog/dialog.demo';
import TreeExample from '../lib/tree/tree.demo'
import LayoutExample from '../lib/layout/layout.example';
import InputExample from '../lib/input/input.demo';
import CollapseExample from '../lib/collapse/collapse.demo';
import GridExample from '../lib/grid/grid.example';
import ToastExample from '../lib/toast/toast.demo';
import UploaderExample from '../lib/uploader/uploader.example';
import PaginationExample from '../lib/pagination/pagination.example';
import { Layout, Header, Aside, Content, Footer } from '../lib/layout/layout'
import './example.scss'

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
                <NavLink activeClassName='active' to="/icon">Icon 图标</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/button">Button 按钮</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/dialog">Dialog 弹窗</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/layout">Layout 布局</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/input">Input 输入框</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/collapse">Collapse 折叠面板</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/grid">Grid 栅格布局</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/toast">Toast 提示</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/uploader">Uploader 文件上传</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/tree">Tree 树选择</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to="/pagination">Pagination 分页</NavLink>
              </li>
            </ul>
          </Aside>
          <Content className='site-content'>
            <Route path="/icon" component={IconExample} />
            <Route path="/button" component={ButtonExample} />
            <Route path="/pagination" component={PaginationExample} />
            <Route path="/dialog" component={DialogExample} />
            <Route path="/layout" component={LayoutExample} />
            <Route path="/input" component={InputExample} />
            <Route path="/collapse" component={CollapseExample} />
            <Route path="/grid" component={GridExample} />
            <Route path="/toast" component={ToastExample} />
            <Route path="/uploader" component={UploaderExample} />
            <Route path="/tree" component={TreeExample} />
          </Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    </Router>
  )
}

export default App
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.demo';
import ButtonExample from './lib/button/button.demo';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import InputExample from './lib/input/input.example';
import CollapseExample from './lib/collapse/collapse.example';
import { Layout, Header, Aside, Content, Footer } from './lib/layout/layout'
import './example.scss'
ReactDOM.render(
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
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">button</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/layout">Layout</Link>
            </li>
            <li>
              <Link to="/input">Input</Link>
            </li>
            <li>
              <Link to="/collapse">Collapse</Link>
            </li>
          </ul>
        </Aside>
        <Content className='site-content'>        
          <Route path="/icon" component={ IconExample }/>
          <Route path="/button" component={ ButtonExample }/>
          <Route path="/dialog" component={ DialogExample }/>
          <Route path="/layout" component={ LayoutExample }/>
          <Route path="/input" component={ InputExample }/>
          <Route path="/collapse" component={ CollapseExample }/>
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'))
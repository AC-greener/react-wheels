import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button/button.example';
import LayoutExample from './lib/layout/layout.example';
import InputExample from './lib/input/input.example';
import CollapseExample from './lib/collapse/collapse.example';

ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          Fake UI
        </div>
      </header>
      <div>
        <aside>
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
        </aside>
        <main>
          <Route path="/icon" component={ IconExample }/>
          <Route path="/button" component={ ButtonExample }/>
          <Route path="/dialog" component={ DialogExample }/>
          <Route path="/layout" component={ LayoutExample }/>
          <Route path="/input" component={ InputExample }/>
          <Route path="/collapse" component={ CollapseExample }/>
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'))
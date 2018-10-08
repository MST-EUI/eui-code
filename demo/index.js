/*
* annotation like `placeholder begin *** and
* placeholder end ***` is required for generate eui manual, please keep it
*/
import React from 'react';
import ReactDOM from 'react-dom';
import '@mistong/eui/dist/index.css';

/* placeholder begin src */
import EuiCode from '../src';
/* placeholder end src */

import './index.scss';

/* placeholder begin class */
class Demo extends React.Component {
  render() {
    return (
      <div className="demo eui-empty-data-demo">
        <EuiCode />
      </div>
    );
  }
}
/* placeholder end class */

/* placeholder begin ReactDOM */
ReactDOM.render(
  <Demo />,
  document.getElementById('app'),
);
/* placeholder end ReactDOM */

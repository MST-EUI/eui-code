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
    const code = `
    const a = 'hello world';
    console.log(a);
    `;
    return (
      <div className="demo eui-code-demo">
        <EuiCode sourceCode={code}>
          我是效果展示区域，可以放入任何内容
        </EuiCode>
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

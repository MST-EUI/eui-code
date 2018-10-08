import React from 'react';
import classnames from 'classnames';
import { Icon } from '@mistong/eui';
import Rsht from 'react-syntax-highlighter';
import i18n from './i18n';

import './style/index.scss';

const { PropTypes } = React;
const i18nDefault = 'zh-cn';

export default class EuiCode extends React.Component {
  static displayName = 'eui-code';

  static propTypes = {
    children: PropTypes.any,
    lang: PropTypes.string,
    sourceCode: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    buttonText: PropTypes.any,
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    lang: i18nDefault,
    prefixCls: 'eui-code',
    buttonText: i18n[i18nDefault].btnText,
    style: {},
    className: '',
    sourceCode: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      codeVisible: true,
    };
  }

  codeToggle = () => {
    this.setState({
      codeVisible: !this.state.codeVisible,
    });
  }

  render() {
    const self = this;
    const {
      prefixCls,
      children,
      style,
      className,
      buttonText,
      lang,
    } = this.props;

    const btnDescription = buttonText || i18n[lang].btnText;

    const {
      codeVisible,
    } = this.state;

    const c = `
    /*
    * annotation like \`placeholder begin *** and
    * placeholder end ***\` is required for generate eui manual, please keep it
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
    `;

    return (
      <div
        className={classnames({ [`${prefixCls}`]: true }, { [className]: !!className })}
        style={style}
      >
        <div className={`${prefixCls}-demo-preview`} >
          {children}
        </div>
        <div
          className={classnames(`${prefixCls}-demo-bottom`, { 'code-hidden': !codeVisible })}
          role="button"
          tabIndex="0"
          onClick={self.codeToggle}
        >
          <div className="button-text">{btnDescription}</div>
          <Icon type={codeVisible ? 'triangle-up' : 'triangle-down'} />
        </div>
        {
          codeVisible ?
            <div className="pre">
              <Rsht
                language="javascript"
                customStyle={{ backgroundColor: 'transparent', padding: 0 }}
              >
                {c}
              </Rsht>
            </div>
          : null
        }
      </div>
    );
  }
}


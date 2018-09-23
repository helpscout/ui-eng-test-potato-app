import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SPECTRE_CLASSNAMES = Object.freeze({
  button: 'btn',
  size: {
    small: 'btn-sm',
    large: 'btn-lg',
    normal: '',
  },
  block: 'btn-block',
  type: {
    default: '',
    primary: 'btn-primary',
    success: 'btn-success',
    error: 'btn-error',
  },
  loading: 'loading',
});

export default class Button extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    block: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'primary', 'success', 'error']),
    disabled: PropTypes.bool,
    status: PropTypes.oneOf(['loading', 'success', 'error']),
    href: PropTypes.string,
    target: PropTypes.string,
    linkComponent: PropTypes.element,
  }

  static defaultProps = {
    size: 'normal',
    block: false,
    type: 'default',
    disabled: false,
    status: undefined,
    href: '',
    target: '',
    linkComponent: undefined,
  }

  render() {
    const { children } = this.props;
    return (
      <button className={this.computeClassNames()}>
        {children}
      </button>
    );
  }

  computeClassNames = () => {
    const { size, type, loading, block } = this.props;
    const classNames = [SPECTRE_CLASSNAMES.button];

    // Size
    classNames.push(SPECTRE_CLASSNAMES.size[size]);
    
    // Type
    classNames.push(SPECTRE_CLASSNAMES.type[type]);
    
    // Loading
    classNames.push(loading ? SPECTRE_CLASSNAMES.loading : '');
    
    // Block
    classNames.push(block ? SPECTRE_CLASSNAMES.block : '');
    
    return classNames.join(' ');
  };
}


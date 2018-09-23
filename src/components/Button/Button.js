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
  link: 'btn-link',
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
    const { href, target, children, linkComponent } = this.props;

    if (href) {
      return this.getHtmlLinkComponent();
    } else if (linkComponent) {
      return this.getLinkComponent();
    } else {
      return (
        <button className={this.computeClassNames()}>
          {children}
        </button>
      );
    }
  }

  computeClassNames = () => {
    const { size, type, loading, block, href, linkComponent } = this.props;
    const classNames = [SPECTRE_CLASSNAMES.button];

    // Size
    classNames.push(SPECTRE_CLASSNAMES.size[size]);
    
    // Type
    classNames.push(SPECTRE_CLASSNAMES.type[type]);
    
    // Loading
    classNames.push(loading ? SPECTRE_CLASSNAMES.loading : '');
    
    // Block
    classNames.push(block ? SPECTRE_CLASSNAMES.block : '');
    
    // Links
    classNames.push(href || linkComponent ? SPECTRE_CLASSNAMES.link : '');

    
    return classNames.join(' ');
  };
  
  getHtmlLinkComponent = () => {
    const { href, target, children } = this.props;
    let rel;

    if (target.toLowerCase() === '_blank') {
      rel = 'noopener';
    }

    return (
      <a
      href={href}
      target={target ? target : '_self'}
      rel={rel}
      className={this.computeClassNames()}>
        {children}
      </a>
    );
  };

  getLinkComponent = () => {
    const { linkComponent } = this.props;
    return (
      <linkComponent.type {...linkComponent.props} className={this.computeClassNames()}/>
    );
  }
}


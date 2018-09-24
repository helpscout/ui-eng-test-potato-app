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
  icons: {
    success: 'icon icon-check',
    error: 'icon icon-cross',
  }
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
    onClick: PropTypes.func,
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
    onClick: undefined
  }

  render() {
    const { href, linkComponent, status, disabled, onClick, children } = this.props;

    if (href) {
      return this.getHtmlLinkComponent();
    } else if (linkComponent) {
      return this.getLinkComponent();
    } else {
      // Prevent clicking if button is in "loading" status
      const disabledButton = status === 'loading' ? true : disabled;

      return (
        <button className={this.computeClassNames()} onClick={onClick} disabled={disabledButton}>
          {
            status && (status === 'success' || status === 'error') ?
              (
                <React.Fragment>
                  <i className={SPECTRE_CLASSNAMES.icons[status]}></i>{' '}<span className="btn-status-text">{status}</span>
                </React.Fragment>
              ) :
              (
                children
              )
          }
        </button>
      );
    }
  }

  computeClassNames = () => {
    const { size, type, status, block, href, linkComponent } = this.props;
    const classNames = [SPECTRE_CLASSNAMES.button];

    // Size
    classNames.push(SPECTRE_CLASSNAMES.size[size]);
    
    // Type
    classNames.push(SPECTRE_CLASSNAMES.type[type]);
    
    // Block
    classNames.push(block ? SPECTRE_CLASSNAMES.block : '');
    
    // Links
    classNames.push(href || linkComponent ? SPECTRE_CLASSNAMES.link : '');

    // Status
    if (status === 'loading') {
      classNames.push(SPECTRE_CLASSNAMES.loading);
    } else if (status === 'success' || status === 'error') {
      classNames.push(SPECTRE_CLASSNAMES.type[status]);
    }
    
    return classNames.join(' ');
  };
  
  getHtmlLinkComponent = () => {
    const { href, target, rel, children } = this.props;
    let relAttr;

    if (target.toLowerCase() === '_blank') {
      relAttr = rel || 'noopener';
    }

    return (
      <a
      href={href}
      target={target ? target : '_self'}
      rel={relAttr}
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


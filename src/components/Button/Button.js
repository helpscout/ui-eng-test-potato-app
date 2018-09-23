import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    return (
    );
  }
}


import React, {PropTypes, Component} from 'react'
import classNames from 'classnames'

export default class ColorOption extends Component {
  constructor (props, context) {
    super(props, context)

    this._handleOnClick = this._handleOnClick.bind(this)
  }

  _handleOnClick () {
    this.props.onClick(this.props.color)
  }

  render () {
    const {
      active,
      title,
      color
    } = this.props

    const aClassName = classNames({selected: active}, 'color-btn')

    return (
      <li>
        <a href='#'
          onClick={this._handleOnClick}
          title={title}
          className={aClassName}
          style={{backgroundColor: color}} />
      </li>
    )
  }
}

ColorOption.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
}

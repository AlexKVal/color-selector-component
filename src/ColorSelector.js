import React, {PropTypes, Component, cloneElement, Children} from 'react'
import classNames from 'classnames'

class ColorSelector extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {expanded: props.defaultExpanded}

    this._handleDropdownClick = this._handleDropdownClick.bind(this)
    this._renderOption = this._renderOption.bind(this)
  }

  _handleDropdownClick (e) {
    this.setState({expanded: !this.state.expanded})

    e.preventDefault()
  }

  _renderOption (child) {
    return cloneElement(
      child,
      {
        active: child.props.color === this.state.colorSelected,
        onClick: (color) => this.setState({ colorSelected: color })
      }
    )
  }

  render () {
    const divClassName = classNames({
      open: this.state.expanded
    }, 'dropdown-colorselector dropdown')

    return (
      <div className={divClassName}>
        <a href='#'
          className='dropdown-toggle'
          aria-expanded={this.state.expanded}>
          <span className='btn-colorselector'
          onClick={this._handleDropdownClick} />
        </a>

        <ul className='dropdown-menu dropdown-caret'>
          {Children.map(this.props.children, this._renderOption)}
        </ul>
      </div>
    )
  }
}

ColorSelector.propTypes = {
  defaultExpanded: PropTypes.bool
}

ColorSelector.defaultProps = {
  defaultExpanded: false
}

export default ColorSelector

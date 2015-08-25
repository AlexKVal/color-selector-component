import React, {PropTypes, Component, cloneElement, Children} from 'react'
import classNames from 'classnames'

class ColorSelector extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      expanded: props.defaultExpanded,
      colorSelected: props.defaultColor
    }

    this._handleDropdownClick = this._handleDropdownClick.bind(this)
    this._renderOption = this._renderOption.bind(this)
  }

  _toggleDropdown () {
    this.setState({expanded: !this.state.expanded})
  }

  _handleDropdownClick (e) {
    this._toggleDropdown()

    e.preventDefault()
  }

  _handleOptionClick (color) {
    this.setState({ colorSelected: color })
    this._toggleDropdown()
  }

  _renderOption (child) {
    return cloneElement(
      child,
      {
        active: child.props.color === this.state.colorSelected,
        onClick: this._handleOptionClick.bind(this)
      }
    )
  }

  _selectedColor () {
    return this.props.defaultColor
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
          onClick={this._handleDropdownClick}
          style={{backgroundColor: this.state.colorSelected}} />
        </a>

        <ul className='dropdown-menu dropdown-caret'>
          {Children.map(this.props.children, this._renderOption)}
        </ul>
      </div>
    )
  }
}

ColorSelector.propTypes = {
  defaultColor: PropTypes.string,
  defaultExpanded: PropTypes.bool
}

ColorSelector.defaultProps = {
  defaultColor: '#DDD',
  defaultExpanded: false
}

export default ColorSelector

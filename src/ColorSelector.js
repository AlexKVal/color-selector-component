import React, {PropTypes, Component} from 'react'
import classNames from 'classnames'

class ColorSelector extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {expanded: props.defaultExpanded}
    this._handleDropdownClick = this._handleDropdownClick.bind(this)
  }

  _handleDropdownClick (e) {
    this.setState({expanded: !this.state.expanded})

    e.preventDefault()
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
          {this.props.children}
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

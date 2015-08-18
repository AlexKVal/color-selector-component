import React, {PropTypes, Component} from 'react'

export default class ColorSelector extends Component {
  render () {
    return (
      <div className='dropdown dropdown-colorselector open'>
        <a href='#' className='dropdown-toggle' aria-expanded='true'>
          <span className='btn-colorselector'></span>
        </a>

        <ul className='dropdown-menu dropdown-caret'>
          {this.props.children}
        </ul>
      </div>
    )
  }
}

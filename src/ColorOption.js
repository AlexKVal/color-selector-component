import React, {PropTypes, Component} from 'react'

export default class ColorOption extends Component {
  render () {
    const {
      title,
      color,
      ...props
    } = this.props

    const aStyle = {
      'background-color': color
    }

    return (
      <li>
        <a href='#'
          title={title}
          className='color-btn'
          style={aStyle} />
      </li>
    )
  }
}

ColorOption.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
}

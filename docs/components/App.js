import React, { Component } from 'react'
import {ColorSelector, ColorOption} from 'color-selector'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <h4>Color selector</h4>

        <ColorSelector>
          <ColorOption />
          <ColorOption />
          <ColorOption />
          <ColorOption />
        </ColorSelector>
      </div>
    )
  }
}

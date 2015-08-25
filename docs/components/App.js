import React, { Component } from 'react'
import {ColorSelector, ColorOption} from 'color-selector'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <h4>Color selector</h4>

        <ColorSelector defaultColor='#FF4500'>
          <ColorOption value='106' color='#A0522D' title='sienna' />
          <ColorOption value='47' color='#CD5C5C' title='indianred' />
          <ColorOption value='87' color='#FF4500' title='orangered' />
          <ColorOption value='15' color='#DC143C' title='crimson' />
          <ColorOption value='24' color='#FF8C00' title='darkorange' />
          <ColorOption value='78' color='#C71585' title='mediumvioletred' />
        </ColorSelector>
      </div>
    )
  }
}

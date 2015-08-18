import React, { Component } from 'react'
import { add } from 'color-selector'

export default class App extends Component {
  render () {
    return (
      <div className='container'>
        <h4>Color selector</h4>

        <div className='dropdown dropdown-colorselector open'>
          <a href='#' className='dropdown-toggle' aria-expanded='true'>
            <span className='btn-colorselector'></span>
          </a>

          <ul className='dropdown-menu dropdown-caret'>
            <li><a href='#' className='color-btn' title='sienna'></a></li>
            <li><a href='#' className='color-btn' title='indianred'></a></li>
            <li><a href='#' className='color-btn' title='orangered'></a></li>
            <li><a href='#' className='color-btn' title='crimson'></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

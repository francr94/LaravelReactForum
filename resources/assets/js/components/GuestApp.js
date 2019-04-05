import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GuestSections from './GuestSections'

    class GuestApp extends Component {
      render () {
        return (
          <div>
                <GuestSections />
          </div>
        )
      }
    }


if (document.getElementById('guestapp')) {
      ReactDOM.render(<GuestApp />, document.getElementById('guestapp'))
}
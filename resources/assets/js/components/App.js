import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Sections from './Sections'
import Threads from './Threads'
import Posts from './Posts'
import GuestSections from './GuestSections'

    class App extends Component {
      render () {
        return (
          <div>
            <BrowserRouter>
              <div>
                <Switch>
                  <Route exact path='/message-board/public/user' component={Sections} />
                  <Route exact path='/message-board/public/user/sections/:id' component={Threads} />
                  <Route exact path='/message-board/public/user/threads/:id' component={Posts} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        )
      }
    }


if (document.getElementById('myapp')) {
      ReactDOM.render(<App />, document.getElementById('myapp'))
}
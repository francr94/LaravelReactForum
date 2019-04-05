    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class GuestSections extends Component {
      constructor () {
        super()
        this.state = {
          sections: []
        }
      }

      componentDidMount () {
        axios.get('/message-board/public/api/sections').then(response => {
          this.setState({
            sections: response.data
          })
        })
      }

      render () {
        const { sections } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                  <div className="panel panel-default">
                      <div className="panel-heading"><h3>Forum Sections</h3></div>
                      <div className="panel-body">
                            {sections.map(section => (
                              <article>
                                  <div
                                    className='align-items-center'
                                  >
                                    <b>{section.name}</b>
                                  </div>
                                  <div class='body'>
                                      {section.description}
                                  </div>
                              </article>
                            ))}
                            <div><br/><br/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    export default GuestSections
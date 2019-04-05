// resources/assets/js/components/Sections.js

    import axios from 'axios'
    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'

    class Sections extends Component {
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
                                  <Link
                                    className='align-items-center'
                                    to={`user/sections/${section.id}`}
                                    key={section.id}
                                  >
                                    <b>{section.name}</b>
                                  </Link>
                                  <div class='body'>
                                      {section.description}
                                  </div>
                              </article>
                            ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    export default Sections
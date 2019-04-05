import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

    class Threads extends Component {
      constructor (props) {
        super(props)
        this.state = {
          section:{},
          threads: [],
          title: '',
          content: ''
        }

        this.createThread = this.createThread.bind(this)
        this.setTitle = this.setTitle.bind(this)
        this.setContent = this.setContent.bind(this)
      }

      componentDidMount () {
        const sectionId = this.props.match.params.id

        axios.get(`/message-board/public/api/sections/${sectionId}`).then(response => {
          this.setState({
            section: response.data,
            threads: response.data.threads
          })
        })
      }

      setTitle(event) {
      this.setState({title: event.target.value})
    }

    setContent(event) {
      this.setState({content: event.target.value})
    }

    createThread(event) {
      event.preventDefault()
      const sectionID = this.props.match.params.id
      const thread = {
        title: this.state.title,
        content: this.state.content,
        section: sectionID
      }
      axios.post(`/message-board/public/api/threads`, thread).then(response => {
        this.props.history.push('/message-board/public/user')
      }).catch(error => {
          alert(JSON.stringify(error))
      })
    }

      render () {
        const { section, threads } = this.state
        return (
          <div className='container py-4'>
            <Link to={`/message-board/public/user`}>Back</Link>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                  <div className="panel panel-default">
                      <div className="panel-heading"><h3>{section.name}</h3></div>
                      <div className="panel-body">
                        {threads.map(thread => (
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <Link
                                    className='align-items-center'
                                    to={`/message-board/public/user/threads/${thread.id}`}
                                    key={thread.id}
                                  >
                                    <b>{thread.title}</b>
                                  </Link>
                                  Created at {thread.created_at}
                                </div>
                                <div className='panel-body'>
                                      {thread.content}
                                </div>
                              </div>
                            ))}
                  </div>
                </div>
              </div>
            </div>
            <div><br/><br/><br/></div>
            
            <div className="panel panel-default">
                <div className="panel-heading">Create a New Thread</div>

                <div className="panel-body">
                  <form onSubmit={this.createThread}>
                    <div className="form-group">
                      <label htmlFor="thread-title">Title</label>
                      <input id="thread-title" 
                      className="form-control" 
                      value={this.state.title}
                      onChange={this.setTitle}
                      placeholder="Enter thread title"></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="thread-content">Content</label>
                      <textarea 
                      id="thread-content" 
                      className="form-control" 
                      value={this.state.content}
                      onChange={this.setContent} 
                      placeholder="Write thread content" 
                      rows="8"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" >
                      Create Thread
                    </button>
                  </form>
                </div>
            </div>


          </div>
        )
      }
    }

    export default Threads
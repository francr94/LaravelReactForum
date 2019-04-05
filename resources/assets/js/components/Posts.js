import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

    class Posts extends Component {
      constructor (props) {
        super(props)
        this.state = {
          thread:{},
          posts: [],
          content: ''
        }

        this.createPost = this.createPost.bind(this)
        this.setContent = this.setContent.bind(this)
      }

      componentDidMount () {
        const threadId = this.props.match.params.id

        axios.get(`/message-board/public/api/threads/${threadId}`).then(response => {
          this.setState({
            thread: response.data,
            posts: response.data.posts
          })
        })
      }

      setContent(event) {
      this.setState({content: event.target.value})
    }

    createPost(event) {
      event.preventDefault()
      const threadID = this.props.match.params.id
      const post = {
        content: this.state.content,
        thread: threadID
      }
      axios.post(`/message-board/public/api/posts`, post).then(response => {
        this.props.history.push('/message-board/public/user')
      }).catch(error => {
          alert(JSON.stringify(error))
      })
    }

      render () {
        const { thread, posts } = this.state
        return (
          <div className='container py-4'>
            <Link to={`/message-board/public/user/sections/${thread.section_id}`}>Back</Link>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                  <div className="panel panel-default">
                      <div className="panel-heading"><h2>{thread.title}</h2>Created at {thread.created_at}</div>
                      <div className="panel-body">{thread.content}</div>
                  </div>
                  {posts.map(post => (

                     <div className="panel panel-default">
                          <div className="panel-heading">Posted at {post.created_at}</div>
                          <div className="panel-body">{post.content}</div>
                      </div>

                  ))}
              </div>
            </div>
            <div><br/><br/><br/></div>
            
            <div className="panel panel-default">
                <div className="panel-heading">Post a Comment</div>

                <div className="panel-body">
                  <form onSubmit={this.createPost}>
                    <div className="form-group">
                      <label htmlFor="post-content">Content</label>
                      <textarea 
                      id="post-content" 
                      className="form-control" 
                      value={this.state.content}
                      onChange={this.setContent} 
                      placeholder="Write your comment" 
                      rows="8"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" >
                      Post Comment
                    </button>
                  </form>
                </div>
            </div>


          </div>
        )
      }
    }

    export default Posts
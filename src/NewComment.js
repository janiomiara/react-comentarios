import React, { Component } from 'react'

export default class NewComment extends Component {
    state = {
        newComment: ''
      }
    handleChange = (e) => {
        let value = e.target.value
        this.setState({newComment: value})
     
    }

    sendComment = () =>{
        this.props.sendComment(this.state.newComment)
        this.setState({newComment: ''})
    }  
    render(){
        return(
            <div>
            <textarea value={this.state.newComment} 
            onChange={(e) => this.handleChange(e)}></textarea>
            <button onClick={this.sendComment}>Enviar</button>
      </div>
        )
    }
}
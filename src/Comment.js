import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        return (
            <div>
                Comentario: {this.props.c.comment}
           </div>
        )
    }
}

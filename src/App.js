import React from 'react';
// import { comment } from 'postcss-selector-parser';
import Comments from './Comments';
import NewComment from './NewComment';
import { database } from './Firebase';


class App extends React.Component {
 state = {
   comments: {},
   isLoading: false,
 }
 sendComment = comment => {
  const id = database.ref().child('comments').push().key
  const comments={}
  comments[`comments/${id}`]= {
    comment
  }
  database.ref().update(comments);
}

componentDidMount(){
  this.setState({isLoading: true})
    this.comment = database.ref('comments')
    this.comment.on('value',snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false,
      })
    })
}

  render (){
  return (
    <div>
      <NewComment sendComment={this.sendComment}
      />
      <Comments comment={this.state.comments}/>
      { this.state.isLoading && <p>Carregando...</p>}
    </div>
  );
}
}
export default App;

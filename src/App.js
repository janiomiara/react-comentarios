import React from 'react';
// import { comment } from 'postcss-selector-parser';
import Comments from './Comments';
import NewComment from './NewComment';


class App extends React.Component {
 state = {
   comment: ['comment 1', 'comment 2', 'comment 3'],
 }

 sendComment = (newcomment) => {
   this.setState({
    comment: [...this.state.comment, newcomment],
   })

 }



  render (){
  return (
    <div>
      <NewComment 
      sendComment={this.sendComment}
      />
      <Comments comment={this.state.comment}/>
    </div>
  );
}
}
export default App;

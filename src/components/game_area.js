import React, {Component} from "react";

class GameArea extends Component{
  constructor(){
    super();
    this.state={
      posts:""
    }
  }

  componentDidMount(){
    this.draw();
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then( (res) => {
        return res.json();
      })
      .then( (json) => {
        this.setState({
          posts: JSON.stringify(json)
        });
      })
      .catch( (err) => {
        console.log(err);
      });
  }

  handleGetPost(){
    const post = document.querySelector(".posts");

    post.innerHTML = this.state.posts;
  }

  draw(){
    let c = document.querySelector(".game-area");
    let  context = c.getContext("2d");

    context.beginPath();
    context.arc(100,75,50,0*Math.PI,1.5*Math.PI);
    context.stroke();  
    context.fillStyle = "red";
    context.fill();
  }
  
	render(){
    const {posts} = this.state;

    console.log(posts);

    return(
			<React.Fragment>
        <div className="game-area-container">
          <canvas ref="canvas" className="game-area">
          </canvas>
        </div>
        <div className="posts"></div>
        <button className="btn btn-default" onClick={this.handleGetPost.bind(this)}>Get Posts</button>
      </React.Fragment>
		)
	}
}

export default GameArea;
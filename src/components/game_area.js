import React, {Component} from "react";

class GameArea extends Component{
  constructor(){
    super();

  }

  componentDidMount(){
    this.draw();
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

    return(
			<React.Fragment>
        <div className="game-area-container">
          <canvas ref="canvas" className="game-area">
          </canvas>
        </div>
      </React.Fragment>
		)
	}
}

export default GameArea;
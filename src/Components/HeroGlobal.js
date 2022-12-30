import React,{Component} from "react";
import "./HeroGlobal.css";

class HeroGlobal extends Component {
  render() {
    return (
      <>
        <div className="heroG_img">
          <div className="heroG_heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
        </div>
      </>
    );
  }
}

export default HeroGlobal;

import React, { Component } from "react";

class Avatar extends Component {
    render() {
        return (
            <img src={this.props.src} className="img-fluid z-depth-1 rounded-circle" alt="" />
        );
    }
}

export default Avatar;
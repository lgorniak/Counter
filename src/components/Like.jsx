import React, { Component } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class Like extends Component {
	render() {
		const liked = this.props.liked ? "fa-heart" : "fa-heart-o";

		return (
			<i
				onClick={this.props.onClick}
				className={`fa " + ${liked}`}
				aria-hidden="true"
			></i>
		);
	}
}

export default Like;

import React, { Component } from "react";
import Like from "./Like";

// Controlled Component. It does not have own local state.
class Counter extends Component {
	render() {
		const isDisabled = this.props.counter.value <= 0 ? "disabled" : "";

		return (
			<div className="row">
				<div className="col-1">
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className="col-2">
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						className="btn btn-secondary btn-sm"
					>
						+
					</button>
					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
						className={"btn btn-secondary btn-sm m-2 " + isDisabled}
					>
						-
					</button>
				</div>
				<div className="col-2">
					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className="btn btn-danger btn-sm m-2"
					>
						x
					</button>
				</div>
				<div className="col-2">
					<Like
						onClick={() => this.props.likedClicked(this.props.counter)}
						liked={this.props.counter.liked}
					/>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 bg-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;

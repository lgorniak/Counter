import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		const {
			onReset,
			onIncrement,
			onDelete,
			counters,
			onDecrement,
			likedClicked,
		} = this.props;

		return (
			<div className="container">
				<button onClick={onReset} className="btn btn-primary btn-sn m-2">
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						likedClicked={likedClicked}
						counter={counter}
					></Counter>
				))}
			</div>
		);
	}
}

export default Counters;

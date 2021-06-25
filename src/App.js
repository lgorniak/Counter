import React, { Component } from 'react';
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import './App.css';

//State Uplifting
class App extends Component {
  state = {
		counters: [
			{ id: 1, value: 4, liked: false},
			{ id: 2, value: 1, liked: true },
			{ id: 3, value: 2, liked: false },
			{ id: 4, value: 0, liked: true },
		],
	};

  handleLike = selected =>{
    const counters = [...this.state.counters];
		const index = counters.indexOf(selected);
    counters[index] = selected;
    counters[index].liked = !selected.liked;

    this.setState({counters});

  }

  handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  }

	handleReset = () => {
		const counters = this.state.counters.map((counter) => {
			counter.value = 0;
			return counter;
		});

		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		console.log("handler clicked", counterId);
		const counters = this.state.counters.filter(
			(counter) => counter.id !== counterId
		);
		this.setState({ counters });
	};

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter( counter => counter.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset} 
            onDelete={this.handleDelete} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            likedClicked={this.handleLike}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
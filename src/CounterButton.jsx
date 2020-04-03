import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Count from './Count';

class CounterButton extends React.Component {
	render() {
		return (
			<>
				<button onClick={Count.increment}>Click me!</button>
				{/* NOTE: directly setting the state updates other components as well */}
				<button onClick={() => Count.number = 100}>Set count to 100</button>
			</>
		);
	}
}


export default view(CounterButton);

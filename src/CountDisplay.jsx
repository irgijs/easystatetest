import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Count from './Count.js';


class CountDisplay extends React.Component {
	render() {
		return (
			<div>Times clicked: {Count.number}</div>
		);
	}
}

export default view(CountDisplay);

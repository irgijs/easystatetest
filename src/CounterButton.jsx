import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Count, { Attribute } from './Count';

class CounterButton extends React.Component {
	render() {
		return (
			<>
				<button onClick={Count.increment}>Click me!</button>
				{/* NOTE: directly setting the state updates other components as well */}
				<button onClick={() => Count.number = 100}>Set count to 100</button>
				<button onClick={() => Count.gdal.entities.all[0].code = "William P. Barr"}>Change entity value without setter</button>
				<button onClick={() => Count.gdal.entities.all[1].setCode("Wolfgang Wagner")}>Change entity value with setter</button>
				<button onClick={() => Count.gdal.entities.all[0].addAttribute(new Attribute("AGE"))}>Add Attribute</button>
				<button onClick={() => Count.gdal.entities.all[0].attributes[0].name = "Leeftijd"}>Change attribute names (must add attribute first)</button>
			</>
		);
	}
}


export default view(CounterButton);

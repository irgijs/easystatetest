import React from 'react';
import { view } from '@risingstack/react-easy-state';
import Count from './Count.js';


class CountDisplay extends React.Component {
	render() {
		return (
			<>
				<div>Times clicked: {Count.number}</div>
				Entities:
				<ul>
				{Count.gdal.entities.all.map(entity => {
					return (<li>{entity.id} -> {entity.code}</li>)
				})}
				</ul>

				attributes of first entity:
				<ul>
					{Count.gdal.entities.all[0].attributes.map(attribute => {
						return (<li>{attribute.name}</li>)
					})}
				</ul>

			</>
		);
	}
}

export default view(CountDisplay);

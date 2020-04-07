import { store } from '@risingstack/react-easy-state';

class Entity {
	constructor(id, code) {
		this.id = id;
		this.code = code;
		this.attributes = [];
	}

	setCode(newCode) {
		this.code = newCode;
	}

	addAttribute(attribute) {
		this.attributes.push(attribute);
	}
}

export class Attribute {
	constructor(name) {
		this.name = name;
	}
}

const count = store({
	number: 0,
	increment: () => count.number++,
	gdal: {
		entities: {
			all: [
				new Entity(1, 'Karl Ernst Rash'),
				new Entity(2, 'Jacob Hargreave'),
			]
		}
	}
});

export default count;

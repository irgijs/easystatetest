import { store } from '@risingstack/react-easy-state';

const count = store({
	number: 0,
	increment: () => count.number++,
});

export default count;

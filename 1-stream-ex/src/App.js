import React from 'react';
import { interval, timer, fromEvent } from 'rxjs';

function App() {
	// promblem
	// document.addEventListener('click', event => {
	// 	console.log(event);
	// 	setTimeout(() => {
	// 		let count = 0;
	// 		setInterval(() => {
	// 			count++;
	// 			console.log(count);
	// 		}, 1000);
	// 	}, 3000);
	// 	setTimeout(() => {
	// 		console.log('die ...');
	// 	}, 6000);
	// });

	// let count1 = 0;
	// setInterval(() => {
	// 	count1++;
	// 	console.log(count1);
	// }, 1000);
	// let count2 = 0;
	// setInterval(() => {
	// 	count2++;
	// 	console.log(count2);
	// }, 1000);

	const interval$ = timer(3000, 1000);

	const clickCount$ = fromEvent(document, 'click');
	clickCount$.subscribe(
		event => {
			console.log(event);
		},
		error => {
			console.log(error);
		},
		() => console.log('done')
	);
	// interval$.subscribe(count => console.log(`count 1 : ${count}`));
	// interval$.subscribe(count => console.log(`count 2 : ${count}`));
	return (
		<div className="App">
			<h1>Hello Rx Js</h1>
		</div>
	);
}

export default App;

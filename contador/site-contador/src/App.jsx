import { useEffect, useState } from "react";
import "./App.css";

const urlApi = import.meta.env.VITE_API;

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetch(`http://${urlApi}:4242/count`)
		  .then(res => res.json())
		  .then(data => setCount(data))
		  .catch(err => console.error('Erro:', err));
	}, []);

	function api(increment) {
		fetch(`http://${urlApi}:4242/count`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ count: increment }),
		})
			.then(res => res.text())
			.then(data => setCount(data))
			.catch(err => console.error('Erro:', err));
	}

	return (
		<>
			<h1>Count click</h1>
			<h2>Count is {count}</h2>
			<div className="card">
				<button onClick={() => api(1)}>+1</button>
				<button onClick={() => api(2)}>+2</button>
				<button onClick={() => api(5)}>+5</button>
			</div>
		</>
	)
}

export default App
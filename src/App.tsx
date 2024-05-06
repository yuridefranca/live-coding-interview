import { useEffect, useState } from 'react';

type Todo = {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
};

const fetchTodos = async (): Promise<{ todos: Todo[] }> => {
	const response = await fetch('https://dummyjson.com/todos?limit=5');
	const data = await response.json();
	return data;
};

export default function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

	const fetchTodosHandler = async () => {
		const data = await fetchTodos();
		setTodos(data.todos);
	};

	useEffect(() => {
		fetchTodosHandler();
	}, []);

	return (
		<main>
			{todos.length > 0 && (
				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>{todo.todo}</li>
					))}
				</ul>
			)}
		</main>
	);
}

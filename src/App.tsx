import { useEffect, useState } from 'react';
import { Todo } from './types';
import { useTodos } from './hooks/useTodos';
import { TodoList } from './components/TodoList';

export default function App() {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
	const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

	const { error, isLoading, setTodos, todos } = useTodos(5);

	const updateTodoHandler = ({ id, todo: todoContent }: Pick<Todo, 'id' | 'todo'>): void => {
		setSelectedTodo({ ...selectedTodo!, todo: todoContent });

		const updatedTodos = todos.map((t) => {
			if (id !== t.id) return t;

			return {
				...t,
				todo: todoContent,
			};
		});

		setTodos(updatedTodos);
	};

	const toggleThemeHandler = () => setIsDarkTheme(!isDarkTheme);

	useEffect(() => {
		document.body.className = isDarkTheme ? 'dark' : '';
	}, [isDarkTheme]);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<main className={isDarkTheme ? 'dark' : ''}>
			<button
				type="button"
				onClick={toggleThemeHandler}
			>
				Toggle Theme
			</button>
			{todos.length > 0 && (
				<TodoList
					setSelectedTodo={setSelectedTodo}
					todos={todos}
				/>
			)}

			{selectedTodo && (
				<input
					type="text"
					value={selectedTodo.todo}
					onChange={(e) => updateTodoHandler({ id: selectedTodo.id, todo: e.target.value })}
				/>
			)}
		</main>
	);
}

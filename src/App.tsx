import { useEffect, useState } from 'react';

import { Todo } from './types';

import { useTodos } from './hooks/useTodos';

import { TodoList } from './components/TodoList';
import { ThemeToggler } from './components/ThemeToggler';
import { TodoDisplay } from './components/TodoDisplay';

import { ThemeContext } from './contexts/theme-context';

export default function App() {
	const [theme, setTheme] = useState<'dark' | 'light'>('light');
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

	const toggleThemeHandler = () => setTheme(theme === 'dark' ? 'light' : 'dark');

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>Error: {error.message}</div>;

	return (
		<ThemeContext.Provider value={theme}>
			<main>
				<ThemeToggler toggleThemeHandler={toggleThemeHandler} />

				{todos.length > 0 && (
					<TodoList
						setSelectedTodo={setSelectedTodo}
						todos={todos}
					/>
				)}

				{selectedTodo && (
					<TodoDisplay
						onChangeHandler={(e) => updateTodoHandler({ id: selectedTodo.id, todo: e.target.value })}
						selectedTodo={selectedTodo}
					/>
				)}
			</main>
		</ThemeContext.Provider>
	);
}

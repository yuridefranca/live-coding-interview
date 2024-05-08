import { useEffect, useState } from 'react';
import { Todo } from '../types';

const fetchTodos = async (limit: number): Promise<{ todos: Todo[] }> => {
	const response = await fetch(`https://dummyjson.com/todos?limit=${limit}`);
	const data = await response.json();
	return data;
};

export const useTodos = (limit: number) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchTodosHandler = async () => {
			setIsLoading(true);
			setError(null);

			try {
				const data = await fetchTodos(limit);
				setTodos(data.todos);
			} catch (err) {
				setError(err as Error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchTodosHandler();
	}, [limit]);

	return { todos, setTodos, isLoading, error };
};

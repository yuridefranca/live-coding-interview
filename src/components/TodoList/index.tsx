import { Todo } from '../../types';

type Props = {
	setSelectedTodo: (todo: Todo) => void;
	todos: Todo[];
};

export const TodoList = ({ setSelectedTodo, todos }: Props): JSX.Element => {
	return (
		<ul>
			{todos.map((todo) => (
				<li
					key={todo.id}
					onClick={() => setSelectedTodo(todo)}
					style={{ cursor: 'pointer', padding: '5px' }}
				>
					{todo.todo}
				</li>
			))}
		</ul>
	);
};

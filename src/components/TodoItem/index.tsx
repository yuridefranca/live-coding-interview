import { Todo } from '../../types';

type Props = {
	setSelectedTodo: (todo: Todo) => void;
	todo: Todo;
};

export const TodoItem = ({ setSelectedTodo, todo }: Props): JSX.Element => {
	return (
		<li
			key={todo.id}
			onClick={() => setSelectedTodo(todo)}
			style={{ cursor: 'pointer', padding: '5px' }}
		>
      {todo.todo}
    </li>
	);
};

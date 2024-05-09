import { Todo } from '../../types';
import { TodoItem } from '../TodoItem';

type Props = {
	setSelectedTodo: (todo: Todo) => void;
	todos: Todo[];
};

export const TodoList = ({ setSelectedTodo, todos }: Props): JSX.Element => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem
					setSelectedTodo={setSelectedTodo}
					todo={todo}
				/>
			))}
		</ul>
	);
};

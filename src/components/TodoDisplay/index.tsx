import { Todo } from '../../types';

type Props = {
	onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	selectedTodo: Todo;
};

export const TodoDisplay = ({ onChangeHandler, selectedTodo }: Props): JSX.Element => {
	return (
		<input
			type="text"
			value={selectedTodo.todo}
			onChange={onChangeHandler}
			style={{ padding: '5px 10px', width: '500px' }}
		/>
	);
};

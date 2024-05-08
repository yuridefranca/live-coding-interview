import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

type Props = {
	toggleThemeHandler: () => void;
};

export const ThemeToggler = ({ toggleThemeHandler }: Props): JSX.Element => {
	const theme = useContext(ThemeContext);

	return (
		<button
			type="button"
			onClick={toggleThemeHandler}
			style={{ cursor: 'pointer' }}
		>
			Toggle to {theme === 'dark' ? 'light' : 'dark'} theme
		</button>
	);
};

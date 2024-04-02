import { TextField } from '@mui/material';
import { ChangeEvent, KeyboardEventHandler } from 'react';

type NumberInputType = {
	label: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	defaultValue: string;
	helperText: string | false;
	onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
	error: boolean;
};

const NumberInput = ({ label, onChange, defaultValue, helperText, onKeyDown, error }: NumberInputType) => {
	return (
		<TextField
			sx={{
				'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
					borderColor: '#EE82EE',
				},
				'& .MuiInputLabel-root.Mui-focused': {
					color: '#5e0087',
				},
			}}
			id={label}
			label={label}
			variant='outlined'
			inputProps={{ inputMode: 'numeric', type: 'number', pattern: '[0-9]*', min: 1, max: 30 }}
			onChange={onChange}
			defaultValue={defaultValue}
			helperText={helperText}
			error={error}
			size='medium'
			fullWidth
			required
			onKeyDown={onKeyDown}
		/>
	);
};

export default NumberInput;

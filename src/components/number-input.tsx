import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

type NumberInputType = {
	label: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	defaultValue: string;
	helperText: string | false;
	error: boolean;
};

const NumberInput = ({ label, onChange, defaultValue, helperText, error }: NumberInputType) => {
	return (
		<TextField
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
		/>
	);
};

export default NumberInput;

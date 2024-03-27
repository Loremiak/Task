import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type SimpleSelectTypes = {
	id: string;
	label: string;
	menuItem: (string | number)[];
	onChange: (event: SelectChangeEvent<string | number>) => void;
	selectedValue: string | number;
};

const SimpleSelect = ({ id, label, menuItem, onChange, selectedValue }: SimpleSelectTypes) => {
	return (
		<FormControl fullWidth>
			<InputLabel id={id}>{label}</InputLabel>
			<Select labelId={id} id='demo-simple-select' value={selectedValue} label={label} onChange={onChange}>
				{menuItem.map((value: string | number) => (
					<MenuItem key={value} value={value}>
						{value}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SimpleSelect;

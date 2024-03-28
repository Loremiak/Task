import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type SimpleSelectTypes = {
	label: string;
	menuItem: string[];
	onChange: (event: SelectChangeEvent<string>) => void;
	selectedValue: string;
};

const SimpleSelect = ({ label, menuItem, onChange, selectedValue }: SimpleSelectTypes) => {
	return (
		<FormControl fullWidth>
			<InputLabel id={label}>{label}</InputLabel>
			<Select labelId={label} id={label} value={selectedValue} label={label} onChange={onChange}>
				{menuItem.map((value: string) => (
					<MenuItem key={value} value={value}>
						{value}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default SimpleSelect;

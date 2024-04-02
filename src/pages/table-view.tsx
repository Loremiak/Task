import { SelectChangeEvent, Box } from '@mui/material';
import { useState, ChangeEvent, useCallback } from 'react';
import SimpleSelect from '../components/simple-select';
import SimpleTable from '../components/simple-table';
import useGetTags from '../services/api';
import NumberInput from '../components/number-input';
import Pagination from '../components/pagination';
import ErrorAlert from '../components/error-alert';

const TableView = () => {
	const [queryParams, setQueryParams] = useState({
		page: '1',
		pageSize: '5',
		order: 'asc',
		sort: 'name',
	});
	const [textFieldError, setTextFieldError] = useState('');

	const { data, isLoading, isError } = useGetTags(queryParams);

	const handlePageChange = useCallback((_: ChangeEvent<unknown>, value: number) => {
		setQueryParams(prevState => ({
			...prevState,
			page: String(value),
		}));
	}, []);

	const handleChange = useCallback((key: 'sort' | 'order', event: SelectChangeEvent<string>) => {
		setQueryParams(prevState => ({
			...prevState,
			[key]: event.target.value,
			page: '1',
		}));
	}, []);

	const handlePageSizeChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value;

		value = value.replace(/[^0-9]/g, '');

		let inputValue = parseInt(value, 10);

		if (Number.isNaN(inputValue)) {
			inputValue = 1;
			setTextFieldError('Wartość musi być liczbą');
		} else {
			setTextFieldError('');
		}

		if (inputValue < 1) {
			setTextFieldError('Minimalna wartość wynosi 1');
			inputValue = 1;
		} else if (inputValue > 30) {
			setTextFieldError('Maksymalna wartość wynosi 30');
			inputValue = 30;
		}

		if (event.target.validity.valid) {
			setTextFieldError('');
		}

		setQueryParams(prevState => ({
			...prevState,
			pageSize: String(inputValue),
		}));
	}, []);

	if (isError) {
		return <ErrorAlert errorText='Coś poszło nie tak, spróbuj odświeżyć stronę.' />;
	}

	return (
		<>
			<Box sx={{ display: 'flex', gap: '10px', margin: '1rem 0' }}>
				<SimpleSelect
					label='Kolejność'
					menuItem={['asc', 'desc']}
					onChange={event => handleChange('order', event)}
					selectedValue={queryParams.order}
				/>
				<SimpleSelect
					label='Sortuj'
					menuItem={['name', 'popular', 'activity']}
					onChange={event => handleChange('sort', event)}
					selectedValue={queryParams.sort}
				/>
				<NumberInput
					label='Ilość elementów'
					onChange={handlePageSizeChange}
					defaultValue={queryParams.pageSize}
					helperText={!!textFieldError && textFieldError}
					error={!!textFieldError}
					onKeyDown={event => ['e', 'E', '+', '-', ',', '.'].includes(event.key) && event.preventDefault()}
				/>
			</Box>
			<SimpleTable isLoading={isLoading} tableCells={['Name', 'Count']} dataList={data && data.items} />
			<Pagination
				count={data && data.quota_remaining <= 25 ? data.quota_remaining : 25}
				page={+queryParams.page}
				onChange={handlePageChange}
			/>
		</>
	);
};

export default TableView;

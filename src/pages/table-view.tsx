import { SelectChangeEvent, Box, CircularProgress } from '@mui/material';
import { useState, ChangeEvent } from 'react';
import SimpleSelect from '../components/simple-select';
import SimpleTable from '../components/simple-table';
import useGetTags from '../services/api';
import NumberInput from '../components/number-input';
import Pagination from '../components/pagination';

const mockedData = {
	items: [
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 147,
			name: '.a',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 162,
			name: '.app',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 64,
			name: '.aspxauth',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 284,
			name: '.class-file',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 6,
			name: '.cod-file',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 3,
			name: '.csproj.in',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 2,
			name: '.ctf',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 161,
			name: '.d.ts',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 4,
			name: '.data',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 154,
			name: '.doc',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 64,
			name: '.emf',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 188,
			name: '.env',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 39,
			name: '.git-folder',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 6,
			name: '.git-info-grafts',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 2,
			name: '.gz',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 9,
			name: '.hgtags',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 73122,
			name: '.htaccess',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 532,
			name: '.htpasswd',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 1,
			name: '.http-files',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 31,
			name: '.ico',
		},
	],
	has_more: true,
	quota_max: 10000,
	quota_remaining: 9698,
};

const TableView = () => {
	const [queryParams, setQueryParams] = useState({
		page: '1',
		pageSize: '5',
		order: 'asc',
		sort: 'name',
	});
	const [textFieldError, setTextFieldError] = useState('');

	const { data, isLoading } = useGetTags(queryParams);

	const handleOrderChange = (event: SelectChangeEvent<string>) => {
		setQueryParams(prevState => ({
			...prevState,
			order: event.target.value,
			page: '1',
		}));
	};

	const handleSortChange = (event: SelectChangeEvent<string>) => {
		setQueryParams(prevState => ({
			...prevState,
			sort: event.target.value,
			page: '1',
		}));
	};

	const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
		setQueryParams(prevState => ({
			...prevState,
			page: String(value),
		}));
	};

	console.log(mockedData);

	// if (isError) {
	// 	return <ErrorAlert />;
	// }

	const handlePageSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const val = event.target.value;
		if (val.match(/[^0-9]/)) {
			return event.preventDefault();
		}

		let inputValue = parseInt(val);

		if (inputValue < 1 || Number.isNaN(inputValue)) {
			setTextFieldError('Minimalna wartość wynosi 1');
			inputValue = 1;
		}
		if (inputValue > 30) {
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
	};

	console.log(queryParams);

	return (
		<div>
			<Box sx={{ display: 'flex', gap: '10px', margin: '1rem 0' }}>
				<SimpleSelect
					label='Kolejność'
					menuItem={['asc', 'desc']}
					onChange={handleOrderChange}
					selectedValue={queryParams.order}
				/>
				<SimpleSelect
					label='Sortuj'
					menuItem={['name', 'popular', 'activity']}
					onChange={handleSortChange}
					selectedValue={queryParams.sort}
				/>
				<NumberInput
					label='Ilość elementów'
					onChange={handlePageSizeChange}
					defaultValue={queryParams.pageSize}
					helperText={!!textFieldError && textFieldError}
					error={!!textFieldError}
				/>
			</Box>
			{isLoading ? (
				<CircularProgress size='6rem' />
			) : (
				<SimpleTable tableCells={['Name', 'Count']} dataList={data ? data.items : mockedData.items} />
			)}
			<Pagination
				count={data ? data.quota_remaining : mockedData.quota_remaining}
				page={+queryParams.page}
				onChange={handlePageChange}
			/>
		</div>
	);
};

export default TableView;

import { DataGrid as MUIDataGrid } from '@mui/x-data-grid';
import getTags from '../services/api';
import { CircularProgress, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import SimpleSelect from './simple-select';
import ErrorAlert from './error-alert';

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

type ItemType = {
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	count: number;
	name: string;
};

type paginationModeType = {
	pageSize: number;
	page: number;
};

const columns = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
		field: 'name',
		headerName: 'Name',
		width: 150,
	},
	{
		field: 'count',
		headerName: 'Count',
		width: 150,
	},
];
const DataGrid = () => {
	const [paginationModel, setPaginationModel] = useState<paginationModeType>({
		pageSize: 5,
		page: 0,
	});
	const [order, setOrder] = useState('asc');
	const [sort, setSort] = useState('name');
	const [pageSize, setPageSize] = useState('5');

	// const { data, isFetched, isLoading, isError } = getTags({
	// 	page: paginationModel.page + 1,
	// 	pageSize,
	// 	order,
	// 	sort,
	// });

	const handleOrderChange = (event: SelectChangeEvent<string | number>) => {
		setOrder(event.target.value as string);
	};

	const handleSortChange = (event: SelectChangeEvent<string | number>) => {
		setSort(event.target.value as string);
	};

	const handlePageSizeChange = (event: SelectChangeEvent<string | number>) => {
		setPageSize(event.target.value as string);
	};

	const handlePageChange = (params: paginationModeType) => {
		setPaginationModel({
			...paginationModel,
			page: params.page,
		});
	};

	// const handlePageSizeChange = (params: paginationModeType) => {
	// 	setPaginationModel({
	// 		...paginationModel,
	// 		pageSize: params.pageSize,
	// 	});
	// };

	console.log(mockedData);

	// if (isLoading) {
	// 	return <CircularProgress size='6rem' />;
	// }

	// if (isError) {
	// 	return <ErrorAlert />;
	// }

	// albo zrobić to poprzez datagrid z wykorzystaniem useState albo poprzez oddzielny useState, tak jak inne selecty

	return (
		<div>
			{true ? (
				<>
					<div>
						<SimpleSelect
							id='Kolejność'
							label='Kolejność'
							menuItem={['asc', 'desc']}
							onChange={handleOrderChange}
							selectedValue={order}
						/>
						<SimpleSelect
							id='Sortuj'
							label='Sortuj'
							menuItem={['name', 'popular', 'activity']}
							onChange={handleSortChange}
							selectedValue={sort}
						/>
						<SimpleSelect
							id='Ilość elementów'
							label='Ilość elementów'
							menuItem={['5', '10', '15', '20', '25', '30']}
							onChange={handlePageSizeChange}
							selectedValue={pageSize}
						/>
					</div>
					<MUIDataGrid
						rows={mockedData.items.map((item: ItemType, index: number) => ({ id: index + 1, ...item }))}
						columns={columns}
						disableRowSelectionOnClick
						paginationModel={paginationModel}
						onPaginationModelChange={handlePageChange}
						paginationMode='server'
						rowCount={mockedData.quota_remaining}
						pageSizeOptions={[30]}
						// loading={isLoading}
					/>
				</>
			) : null}
		</div>
	);
};

export default DataGrid;

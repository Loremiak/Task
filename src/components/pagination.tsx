import { Stack, Pagination as MUIPagination } from '@mui/material';
import { ChangeEvent } from 'react';

type PaginationType = {
	count: number;
	page: number;
	onChange: (_: ChangeEvent<unknown>, value: number) => void;
};

const Pagination = ({ count, page, onChange }: PaginationType) => {
	return (
		<Stack sx={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }} spacing={2} test-id='pagination-component'>
			<MUIPagination
				color='secondary'
				count={count}
				page={page}
				onChange={onChange}
				variant='outlined'
				shape='rounded'
			/>
		</Stack>
	);
};

export default Pagination;

import {
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Table,
	Card,
	LinearProgress,
	Stack,
} from '@mui/material';

type SimpleTableType = {
	tableCells: string[];
	dataList: {
		name: string;
		count: number;
	}[];
	isLoading: boolean;
};

const SimpleTable = ({ tableCells, dataList, isLoading }: SimpleTableType) => {
	return (
		<TableContainer component={Card}>
			<Table sx={{ minWidth: 650, minHeight: '300px' }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						{tableCells.map(tableCell => (
							<TableCell
								sx={{ color: '#5e0087', fontWeight: 'bold', borderBottom: `${isLoading ? '' : '2px solid #EE82EE'}` }}
								key={tableCell}>
								{tableCell}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{isLoading ? (
						<TableRow>
							<TableCell colSpan={tableCells.length} sx={{ padding: 0, verticalAlign: 'top' }}>
								<Stack sx={{ width: '100%' }} spacing={2}>
									<LinearProgress color='secondary' />
								</Stack>
							</TableCell>
						</TableRow>
					) : (
						dataList.map(({ name, count }) => (
							<TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell>{name}</TableCell>
								<TableCell>{count}</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SimpleTable;

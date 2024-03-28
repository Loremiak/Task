import { TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table } from '@mui/material';

type SimpleTableType = {
	tableCells: string[];
	dataList: {
		name: string;
		count: number;
	}[];
};

const SimpleTable = ({ tableCells, dataList }: SimpleTableType) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow sx={{ backgroundColor: 'gray' }}>
						{tableCells.map(tableCell => (
							<TableCell sx={{ fontWeight: 'bold' }} key={tableCell}>
								{tableCell}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{dataList.map(({ name, count }) => (
						<TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell>{name}</TableCell>
							<TableCell>{count}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SimpleTable;

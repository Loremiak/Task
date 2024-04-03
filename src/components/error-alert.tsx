import { Alert } from '@mui/material';
import { FC } from 'react';

const ErrorAlert: FC<{ errorText: string }> = ({ errorText }) => {
	return (
		<Alert variant='filled' severity='error'>
			{errorText}
		</Alert>
	);
};

export default ErrorAlert;

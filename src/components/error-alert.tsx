import { Alert } from '@mui/material';

type ErrorAlertType = {
	errorText: string;
};

const ErrorAlert = ({ errorText }: ErrorAlertType) => {
	return (
		<Alert variant='filled' severity='error'>
			{errorText}
		</Alert>
	);
};

export default ErrorAlert;

import { Alert } from '@mui/material';

const ErrorAlert = () => {
	return (
		<Alert variant='filled' severity='error'>
			Coś poszło nie tak, spróbuj odświeżyć stronę.
		</Alert>
	);
};

export default ErrorAlert;

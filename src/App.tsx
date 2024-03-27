import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import DataGrid from './components/data-grid';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<DataGrid />
		</QueryClientProvider>
	);
}

export default App;

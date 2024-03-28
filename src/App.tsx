import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import TableView from './pages/table-view';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TableView />
		</QueryClientProvider>
	);
}

export default App;

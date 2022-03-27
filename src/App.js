import './styles/App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Greetings from './components/Greetings';
import Auth from "./components/PiAuth"
import { NoAuth } from './components/NoAuth';

function App() {

  const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: twentyFourHoursInMs,
      },
    },
  });

  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

  return (
    <div className="App">
      <Greetings text="Reljod's Sample Pi App"/>
      <QueryClientProvider client={queryClient}>
        {
          isDev ? 
            <Auth/> : <NoAuth/>
        }
      </QueryClientProvider>
    </div>
  );
}

export default App;

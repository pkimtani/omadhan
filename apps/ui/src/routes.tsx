import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home.page';
import App from './app/app';
import MarketDataProviderPage from './pages/market-data-provider.page';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'market-data-providers',
                element: <MarketDataProviderPage />,
            },
        ],
    },
]);
export default routes;

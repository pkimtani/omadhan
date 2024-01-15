import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>,
);

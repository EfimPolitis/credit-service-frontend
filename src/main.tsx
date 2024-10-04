
import { createRoot } from 'react-dom/client';

import { RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/styles/globals.scss';

import { router } from './router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

);
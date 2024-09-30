import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register';

import App from '@/App';

import worker from './_mock';
import './locales/i18n';
import './theme/index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      gcTime: 300_000,
      staleTime: 10_1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense>
        <Analytics />
        <App />
      </Suspense>
    </QueryClientProvider>
  </HelmetProvider>,
);

// 🥵 start service worker mock in development mode
worker.start({ onUnhandledRequest: 'bypass' });

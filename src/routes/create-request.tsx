import CreateRequestPage from '@/pages/create-request';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/create-request')({
  component: () => <CreateRequestPage />,
});

import MyRequestsPage from '@/pages/my-requests';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my-requests')({
  component: () => <MyRequestsPage />,
});

import { Outlet, createRootRoute } from '@tanstack/react-router';
import { NotFound } from '@/pages';
import Header from '@/components/frames/header';
import React from 'react';

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  ),
  notFoundComponent: () => <NotFound />,
});

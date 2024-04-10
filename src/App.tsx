import type { Router as RemixRouter } from '@remix-run/router';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loginRouter } from './modules/login/routes';
import { mainRouter } from './modules/main/routes';
import { verifyLoggedIn } from './shared/functions/connection/auth';

const freeRoutes: RouteObject[] = [
  ...loginRouter,
];

const loggedInRoutes: RouteObject[] = [
  ...mainRouter,
].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

const router: RemixRouter = createBrowserRouter([
  ...freeRoutes,
  ...loggedInRoutes,
]);

function App() {

  return <>
    <RouterProvider router={router}/>
  </>;
}

export default App;

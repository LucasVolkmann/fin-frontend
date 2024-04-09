import type { Router as RemixRouter } from '@remix-run/router';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loginRouter } from './modules/login/routes';
import { mainRouter } from './modules/main/routes';

const freeRoutes: RouteObject[] = [
  ...loginRouter,
  ...mainRouter,
];

// const loggedInRoutes: RouteObject[] = [
//   ...userRoutes,
//   ...mainRoutes,
// ].map((route) => ({
//   ...route,
//   loader: verifyLoggedIn,
// }));

const router: RemixRouter = createBrowserRouter([
  ...freeRoutes,
  // ...loggedInRoutes,
]);

function App() {
  return <>
    <RouterProvider router={router}/>
  </>;
}

export default App;

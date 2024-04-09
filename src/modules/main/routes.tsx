import { RouteObject } from 'react-router-dom';
import MainScreen from './';

export enum MainRoutesEnum {
  MAIN = '/'
}

export const mainRouter: RouteObject[] = [
  {
    path: MainRoutesEnum.MAIN,
    element: <MainScreen />,
  },
];
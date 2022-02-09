import { ReactLocation, Route } from 'react-location'

export const routes: Route[] = [
  { element: () => import('./pages/Home').then((module) => <module.default />), path: '/' }
]

export const location = new ReactLocation()

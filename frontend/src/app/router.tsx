import { createRootRoute, createRoute, createRouter, lazyRouteComponent } from '@tanstack/react-router'
import { LoginPage } from '@/features/auth/LoginPage'
import { ContentList } from '@/features/content/ContentList'
import { AppLayout } from './AppLayout'

const rootRoute = createRootRoute({ component: AppLayout })
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <ContentList workspaceId="demo" />,
})
const loginRoute = createRoute({ getParentRoute: () => rootRoute, path: '/login', component: LoginPage })

const devRoutes = import.meta.env.DEV
  ? [
      createRoute({
        getParentRoute: () => rootRoute,
        path: '/playground',
        component: lazyRouteComponent(() => import('@/features/playground/PlaygroundPage'), 'PlaygroundPage'),
      }),
    ]
  : []

export const router = createRouter({ routeTree: rootRoute.addChildren([indexRoute, loginRoute, ...devRoutes]) })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

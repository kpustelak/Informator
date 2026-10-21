import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
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

export const router = createRouter({ routeTree: rootRoute.addChildren([indexRoute, loginRoute]) })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

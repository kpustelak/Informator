import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { LoginPage } from '@/features/auth/LoginPage'
import { PlaygroundPage } from '@/features/playground/PlaygroundPage'
import { ContentList } from '@/features/content/ContentList'
import { AppLayout } from './AppLayout'

const rootRoute = createRootRoute({ component: AppLayout })
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <ContentList workspaceId="demo" />,
})
const loginRoute = createRoute({ getParentRoute: () => rootRoute, path: '/login', component: LoginPage })
const playgroundRoute = createRoute({ getParentRoute: () => rootRoute, path: '/playground', component: PlaygroundPage })

export const router = createRouter({ routeTree: rootRoute.addChildren([indexRoute, loginRoute, playgroundRoute]) })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

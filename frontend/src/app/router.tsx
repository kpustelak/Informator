import { createRootRoute, createRoute, createRouter, lazyRouteComponent } from '@tanstack/react-router'
import { LoginPage } from '@/features/auth/LoginPage'
import { AppLayout } from './AppLayout'
import { PageList} from "@/features/PageList/PageList"
import { Page } from "@/features/Page/Page"

const rootRoute = createRootRoute({ component: AppLayout })

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/pagelist',
    component: () => <PageList/>,
})

const pageRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/pages/$pageId',
    component: Page,
})

const loginRoute =createRoute({ getParentRoute: () => rootRoute, path: '/login', component: LoginPage })

const devRoutes = import.meta.env.DEV
  ? [
      createRoute({
        getParentRoute: () => rootRoute,
        path: '/playground',
        component: lazyRouteComponent(() => import('@/features/playground/PlaygroundPage'), 'PlaygroundPage'),
      }),
    ]
  : []

export const router = createRouter({ routeTree: rootRoute.addChildren([indexRoute, pageRoute, loginRoute, ...devRoutes]) })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

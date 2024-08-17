import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'

interface Breadcrumb {
    name: string;
    path: string;
}

export function useBreadcrumb() {
    const route = useRoute()
    const router = useRouter()

    const breadcrumbs = computed<Breadcrumb[]>(() => {
        const crumbs: Breadcrumb[] = []
        let path = ''

        route.path.split('/')
            .filter(Boolean)
            .forEach((crumb) => {
                path += `/${crumb}`
                const matchedRoute = router.getRoutes().find((r) => r.path === path)

                if (matchedRoute && matchedRoute.meta.breadcrumb) {
                    const name = typeof matchedRoute.meta.breadcrumb === 'function'
                        ? matchedRoute.meta.breadcrumb(route)
                        : matchedRoute.meta.breadcrumb as string

                    crumbs.push({name, path})
                }
            })

        return crumbs
    })

    return {breadcrumbs}
}